const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-3 border-t">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
          {/* Pages Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Legal Info
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund, Trial & Exchange Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-bold">Main Office:</span> 11 Badaldi Main
                road Baunia, Turag Dhaka 1230
              </li>
              <li>
                <span className="font-bold">Uttara Office:</span> House 57, Road
                3, Sector 5, Uttara, Dhaka 1230
              </li>
              <li>
                <span className="font-bold">Phone:</span> 01713222653
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-10 text-center border-t pt-6 text-gray-500">
          <p>Copyright © 2024 Gorur Ghash</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
