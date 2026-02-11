# Lead submissions to Google Sheet

Contact form and Avasya order form submissions can be saved to a Google Spreadsheet.

## 1. Create the Google Sheet and script

1. Create a new Google Sheet: [sheets.new](https://sheets.new).
2. Name the sheet (e.g. "Leads").
3. In the first row, add these headers (one per column):

   | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S |
   |---|----|----|-----|------|--------|---------|--------|----------|---------|---------|---------|-----|------|-------|-----|---------------|-------------|-------------|
   | Type | Timestamp | Name | Email | Phone | Company | Country | Interests | Products | Quantity | Message | Address | City | State | Pincode | Notes | Cart_Summary | Total_Items | Total_Price |

4. Go to **Extensions → Apps Script**. Delete any sample code and paste the script below.
5. Save the project (e.g. "Leads to Sheet").
6. Click **Deploy → New deployment** → type **Web app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
7. Click **Deploy**, authorize if asked, then copy the **Web app URL** (looks like `https://script.google.com/macros/s/.../exec`). You will use this as `GOOGLE_SHEET_WEB_APP_URL`.

## 2. Apps Script code (paste in the script editor)

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var params = e.postData ? JSON.parse(e.postData.contents) : {};
    var row = [
      params.type || "Contact",
      new Date(),
      params.name || "",
      params.email || "",
      params.phone || "",
      params.company || "",
      params.country || "",
      params.interests || "",
      params.products || "",
      params.quantity || "",
      params.message || "",
      params.address || "",
      params.city || "",
      params.state || "",
      params.pincode || "",
      params.notes || "",
      params.cart_summary || "",
      params.total_items != null ? params.total_items : "",
      params.total_price != null ? params.total_price : ""
    ];
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3. Wire the site to the script (Cloudflare Pages)

1. In **Cloudflare Dashboard** → your Pages project → **Settings** → **Environment variables**.
2. Add a variable:
   - **Name:** `GOOGLE_SHEET_WEB_APP_URL`
   - **Value:** the Web app URL from step 1.7 (e.g. `https://script.google.com/macros/s/.../exec`).
3. Redeploy the site so the function picks up the new variable.

The frontend posts to `/api/submitLead`; the Cloudflare function in `functions/api/submitLead.js` forwards that to your Google Apps Script URL.

## 4. Optional: use a different endpoint

If you host the site elsewhere (e.g. Netlify), set **REACT_APP_LEAD_SUBMIT_URL** in your build environment to the full URL of your serverless function that forwards POST body to the same Google Script URL. The function should accept JSON and POST it to `GOOGLE_SHEET_WEB_APP_URL`.

## What gets saved

- **Contact / Contact modal:** Type = `contact`; Name, Email, Phone, Company, Country, Interests, Products, Quantity, Message.
- **Avasya order:** Type = `avasya_order`; Name, Email, Phone, Address, City, State, Pincode, Notes, Cart_Summary (text), Total_Items, Total_Price.
