import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";
import Root from "./Root";

// Mock useOutletContext to provide the necessary context for the Cart component
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: () => ({
      cartItems: [{ id: 1, name: "Test Product", price: 10, quantity: 1 }],
      cartTotal: 10,
      removeFromCart: vi.fn(),
    }),
  };
});

// Mock window.alert
global.alert = vi.fn();

describe("Cart Component", () => {
  it("does not display CartItem components after clicking checkout button", async () => {
    // Render the Root component with MemoryRouter
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Click the checkout button
    const checkoutButton = screen.getByRole("button", { name: /checkout/i });
    await userEvent.click(checkoutButton);

    // Assert that there are no CartItem components displayed
    const cartItems = screen.queryAllByTestId("cart-item");
    expect(cartItems).toHaveLength(0);
  });

  it("removes a CartItem component after clicking the delete button", async () => {
    // Render the Root component with MemoryRouter
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Click the delete button
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await userEvent.click(deleteButton);

    // Assert that the CartItem component is removed
    const cartItems = screen.queryAllByTestId("cart-item");
    expect(cartItems).toHaveLength(0);
  });

  it("updates the cartTotal amount when a CartItem is deleted", async () => {
    // Render the Root component with MemoryRouter
    render(
      <MemoryRouter initialEntries={["/cart"]}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Assert initial cartTotal
    expect(screen.getByText(/total: \$10/i)).toBeInTheDocument();

    // Click the delete button
    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await userEvent.click(deleteButton);

    // Assert that the cartTotal amount is updated
    expect(screen.getByText(/total: \$0/i)).toBeInTheDocument();
  });
});
