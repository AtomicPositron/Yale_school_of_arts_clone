import "./footer.css";

function Footer() {
  return (
    <div className="mt-50 footer flex flex-col gap-10 text-center justify-center align-center">
      <div className="flex flex-wrap gap-8 mb-5 flex-row justify-center">
        <span><a href="https://www.art.yale.edu/about/support-the-school">Support the School</a></span>
        <span><a href="https://www.art.yale.edu/about/visiting">Visiting</a></span>
        <span><a href="https://www.instagram.com/yaleschoolofart/">Instagram</a></span>
        <span><a href="https://www.facebook.com/YaleSchoolofArt/">Facebook</a></span>
        <span><a href="http://yaleart.org/youtube">Youtube</a></span>
        <span><a href="https://www.art.yale.edu/about/contact">Contact</a></span>
        <span><a href="https://www.art.yale.edu/sitemap">Sitemap</a></span>
        <span><a href="https://your.yale.edu/policies-procedures/policies/1605-web-accessibility-policy">Accessibility at Yale</a></span>
      </div>
      <p className="font-bold mb-10">© 2025</p>
    </div>
  );
}

export default Footer;
