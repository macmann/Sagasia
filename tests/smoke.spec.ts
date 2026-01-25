import { expect, test } from "@playwright/test";

test("home loads", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "Strategy and intelligence for Asia-Pacific growth leaders.",
    })
  ).toBeVisible();
});

test("primary nav routes to services", async ({ page }) => {
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" });
  await nav.getByRole("link", { name: "Services" }).click();
  await expect(page).toHaveURL(/\/services/);
  await expect(
    page.getByRole("heading", { name: "Advisory services for growth moments" })
  ).toBeVisible();
});

test("contact form validation triggers", async ({ page }) => {
  await page.goto("/contact");

  await page.getByLabel("Name").fill("Jamie Tan");
  await page.getByLabel("Company").fill("Sagasia");
  await page.getByLabel("Role").fill("Director");
  await page.getByLabel("Email address").fill("not-an-email");
  await page.getByLabel("Industry").fill("Fintech");
  await page.getByLabel("Type of inquiry").selectOption("advisory");
  await page
    .getByLabel("Brief description")
    .fill("Looking for a market entry assessment in APAC.");

  await page.getByRole("button", { name: /send inquiry/i }).click();

  await expect(
    page.getByText("Please fix the highlighted fields and try again.")
  ).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
});
