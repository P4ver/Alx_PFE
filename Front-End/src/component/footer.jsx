import React from 'react';

function Footer() {
    return (
        <div>
            <div class="relative mt-20 mx-auto bg-blue-700 px-4 pt-20">
  {/* <nav aria-label="Footer Navigation" class="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
    <a href="#" class="font-medium text-white">Demo</a>
    <a href="#" class="font-medium text-white">Support</a>
    <a href="#" class="font-medium text-white">Privacy Policy</a>
    <a href="#" class="font-medium text-white">Terms & Conditions</a>
  </nav> */}
  <nav aria-label="Footer Navigation" class="mx-auto mb-10 flex max-w-lg justify-center  text-center sm:flex-row sm:text-left">
    <a href="https://www.linkedin.com/in/habti-mohammed" class="font-medium text-white p-7">Linkedin</a>
    <a href="https://twitter.com/mohammed_habti" class="font-medium text-white p-7">Twitter</a>
    <a href="https://github.com/P4ver/" class="font-medium text-white p-7">github</a>
    {/* <a href="https://github.com/P4ver/" class="font-medium text-white">github</a> */}
  </nav>

  <p class="py-10 text-center text-gray-300">© 2024 P4ver | All Rights Reserved</p>
</div>

        </div>
    );
}

export default Footer;