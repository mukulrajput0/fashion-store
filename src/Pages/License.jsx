import React from "react";

const License = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">License & Copyright</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Please review our license policy regarding the use of our products,
          designs, and content. By accessing our store, you agree to the
          following terms.
        </p>
      </div>

      {/* Section 1 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">1. Copyright</h2>
        <p className="text-gray-600 leading-relaxed">
          All content on this website including text, graphics, logos, product
          images, and designs are the property of <b>TrendWear</b> and are
          protected under international copyright laws. Unauthorized use,
          reproduction, or distribution of any content without written
          permission is strictly prohibited.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">2. Product Usage</h2>
        <p className="text-gray-600 leading-relaxed">
          Our clothing products are licensed for <b>personal use only</b>.
          Commercial resale of products, branding, or modification of our
          designs without prior agreement is not allowed.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">3. Trademarks</h2>
        <p className="text-gray-600 leading-relaxed">
          All trademarks, service marks, and trade names of TrendWear used on
          this site are trademarks or registered trademarks of TrendWear. They
          may not be used in connection with any product or service without
          written authorization.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">4. License for Images</h2>
        <p className="text-gray-600 leading-relaxed">
          Product images on this website are either owned by TrendWear or
          licensed from third-party stock providers. You are not permitted to
          reuse, resell, or distribute images without explicit permission.
        </p>
      </div>

      {/* Section 5 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">5. Fair Use</h2>
        <p className="text-gray-600 leading-relaxed">
          You may share our content for personal, educational, or non-commercial
          purposes provided that full credit is given to TrendWear with a link
          to our website. Any use beyond fair use requires written consent.
        </p>
      </div>

      {/* Contact Section */}
      <div className="text-center mt-16 bg-gray-100 p-8 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Need Permission?</h2>
        <p className="text-gray-600 mb-6">
          For business partnerships, collaborations, or licensing requests,
          please contact us at:
        </p>
        <a
          href="mailto:license@trendwear.com"
          className="text-blue-600 font-medium hover:underline"
        >
          license@trendwear.com
        </a>
      </div>
    </div>
  );
};

export default License;
