import { test, expect } from '@playwright/test';

test('Suwasewana Full Flow: Create Account and Book Appointment', async ({ page }) => {
  
  // 1. Navigate to the base URL of the application
  await page.goto('https://suwasewana-vgqa.vercel.app/');

  // 2. Click on the "Create Account" button to open the registration form
  // Using exact: true to ensure we click the primary button
  await page.getByRole('button', { name: 'Create Account', exact: true }).click();

  // 3. Fill in user registration details
  // Note: Playwright automatically focuses/clicks before filling, so manual clicks are removed for cleaner code
  await page.locator('input[type="text"]').fill('Imanshiiii');
  await page.locator('input[type="email"]').fill('imanshii23456@gmail.com');
  await page.locator('input[type="password"]').fill('password1234imas');

  // 4. Submit the registration form
  await page.getByRole('button', { name: 'Create Account' }).last().click();

  // 5. Navigate to the appointment booking section
  await page.getByRole('link', { name: 'Book appointment arrow icon' }).click();

  // 6. Select the first available doctor or category slot
  // Using .first() because multiple slots might share the same class
  await page.locator('.bg-green-50').first().click();

  // 7. Select appointment date and time
  await page.getByText('20', { exact: true }).click(); 
 await page.getByText('10:00 am').click();                 

  // 8. Confirm the appointment booking
  await page.getByRole('button', { name: 'Book an Appointment' }).click();

  // 9. Assertion: Verify that the booking was successful
  // We check if the "Cancel Appointment" button is visible as proof of a successful booking
  await expect(page.getByRole('button', { name: 'Cancel Appointment' })).toBeVisible();
});