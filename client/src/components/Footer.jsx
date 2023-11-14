export const Footer = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Feature is coming soon..',
    })
  }
  return (
    <div className="wrapper" style={{ fontSize: "14px" }}>
      <footer>
        <div style={{ display: "flex", justifyContent: "space-around", gap: "10vh" }}>
          <div className="footer-section" style={{ width: "30rem" }}>
            <h4>ABOUT</h4>
            <a onClick={submitHandler} href="#">Contact Us</a>
            <a onClick={submitHandler}  href="#">About Olive Garden</a>
            <a onClick={submitHandler}  href="#">Nutritional & Allergens</a>
            <a onClick={submitHandler}  href="#">Careers</a>
            <a onClick={submitHandler}  href="#">Community</a>
            <a onClick={submitHandler}  href="#">FAQs</a>
            <a onClick={submitHandler}  href="#">Press</a>
            <a onClick={submitHandler}  href="#">International Franchising</a>
          </div>
          <div className="footer-section">
            <h4 style={{ whiteSpace: "nowrap" }}>GIFT CARDS & OFFERS</h4>
            <a onClick={submitHandler}  href="#">Buy Gift Cards</a>
            <a onClick={submitHandler} href="#">Check Gift Card Balances</a>
            <a onClick={submitHandler}  href="#">Specials</a>
          </div>
          <div className="footer-section" style={{ width: "30rem" }}>
            <h4>ORDERING</h4>
            <a onClick={submitHandler}  href="#">Order To Go</a>
            <a onClick={submitHandler}  href="#">My Account</a>
            <a onClick={submitHandler}  href="#">Lookup Order</a>
            <a onClick={submitHandler}  href="#">Order History</a>
            <a onClick={submitHandler}  href="#">Locations</a>
          </div>
        </div>
        <div className="footer-links">
          <a onClick={submitHandler}  href="#">Sitemap</a>
          <a onClick={submitHandler}  href="#"> | Legal Notices</a>
          <a onClick={submitHandler}  href="#"> | Privacy Notice</a>
          <a onClick={submitHandler}  href="#"> | Do Not Sell or Share My Personal Information</a>
          <a onClick={submitHandler}  href="#"> | My Privacy Choices</a>
          <a onClick={submitHandler}  href="#"> | Accessibility Statement</a>
        </div>
        <p style={{ paddingTop: "4vh" }} className="trademarks">
          &copy; 2023 Darden Concepts, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
