import "../styles/styles.css";

export default function MyFooter() {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
              It’s high time for all of us to think about our impression and
              capacity to lessen the waste and its impacts on the climate. This
              must be finished by settling on a responsible choice of utilizing
              eco-friendly products. Earthly Eco-friendly products like bamboo
              toothbrushes, bamboo straws,plant-based coffee cups, and many
              sustainable products are items that are not unsafe to the climate.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Products</h6>
            <ul class="footer-links">
              <li>
                <a href="#home">The sustainable starter kit</a>
              </li>
              <li>
                <a href="#home">Plant based reusable cups</a>
              </li>
              <li>
                <a href="#home">Reusable bamboo straws</a>
              </li>
              <li>
                <a href="#home">Natural bamboo loofah</a>
              </li>
              <li>
                <a href="#home">Bamboo toothbrush</a>
              </li>
              <li>
                <a href="#home">Plant based reusable containers</a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="#home">About Us</a>
              </li>
              <li>
                <a href="#home">Contact Us</a>
              </li>
              <li>
                <a href="#home">Contribute</a>
              </li>
              <li>
                <a href="#home">Privacy Policy</a>
              </li>
              <li>
                <a href="#home">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by
              <a href="#"> earthly</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
