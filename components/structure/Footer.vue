<template>
  <footer >
      <div class="copy-text flex center top-spacing-5-xl">
          <p>Copyright © 2022 cryptoNalytica. All rights reserved.</p>
      </div>
      <section class="top-spacing-m ">
          <div class="footer-links top-spacing-m flex between middle container">
              <div>
                  <ul>
                      <li> <a href="#">Blog</a> </li>
                      <li> <a href="#">Twitter</a> </li>
                      <li> <a href="#">API</a></li>
                  </ul>
              </div>
              <div class="logo">
                <a href="/">
                    <img src="~/assets/img/logo-img-black.svg" alt="CryptoNalytica">
                </a>
              </div>
              <div>
                  <p >Contact us by <span class="pointer">ncontact@newcoin.com</span></p>
              </div>
          </div>
      </section>
  </footer>
</template>

<style lang="scss" scoped>
    section {
        border-top: 1px solid;
        border-top-color: #EEEEEE;
    }

    .copy-text {
        font-size: var(--text-p14-font-size);
        color: var(--color-grey-4);
        padding: var(--spacing-m);
        text-align: center;
    }
    span {
        color: var(--color-primary);
    }
    ul {
        list-style: none;
        li {
            display: inline-block;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            + li {margin-left: var(--spacing-2-xl);}
        }
    }
    footer {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 680px) {
        .footer-links {
            flex-direction: column;
            gap: var(--spacing-m);
            justify-content: center;
            div:first-child {order: 2}
            div:last-child {order: 3}
        }
    }
</style>