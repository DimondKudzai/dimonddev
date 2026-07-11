document.write(`
<style type="text/css">
.contact-section {
  text-align: center;
//  padding: 60px 20px;
 // background: #f9f9f9;
}

.contact-section h2 {
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: #333;
}

.contact-section p {
  font-size: 1rem;
  color: #666;
}

.social-icons {
  //margin-top: 20px;
}
.social-icons a {
  margin: 0 15px;
  font-size: 1.8rem;
  color: #444;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  color: #0077b5; /* Default LinkedIn blue */
  transform: scale(1.2);
}


</style>

<section id="contact" class="contact-section">
  <div class="social-icons">
    <a href="https://linkedin.com/in/dimond-madechawo-450994183" target="_blank" aria-label="LinkedIn">
      <i class="fab fa-linkedin fa-lg"></i>
    </a>
   
    <a href="https://github.com/dimondKudzai" target="_blank" aria-label="GitHub">
      <i class="fab fa-github fa-lg"></i>
    </a>
    <a href="https://www.facebook.com/profile.php?id=61557339544774" target="_blank" aria-label="Facebook">
      <i class="fab fa-facebook fa-lg"></i>
    </a>
    <a href="https://x.com/UlenSmartLearn?s=01" target="_blank" aria-label="X (Twitter)">
    <i class="fa-brands fa-x-twitter fa-lg" title="X" alt="X" id="x"></i>  
    </a>
  </div>
</section>

`);