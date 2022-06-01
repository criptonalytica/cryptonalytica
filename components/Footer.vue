<template>
  <footer >
      <div id="copyText" class="flex center top-spacing-5-xl">
          <p>Copyright © 2022 cryptoNalytica. All rights reserved.</p>
      </div>
      <section class="top-spacing-m ">
          <div class="top-spacing-m flex between middle container">
              <div>
                  <ul>
                      <li> <a href="#">Blog</a> </li>
                      <li> <a href="#">Twitter</a> </li>
                      <li> <a href="#">API</a></li>
                  </ul>
              </div>
              <div>
                  <img class="pointer" src="~/assets/img/logo-img-black.svg" alt="CryptoNalytica">
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

    #copyText{
        font-size: var(--text-p14-font-size);
        color: var(--color-grey-4);
    }
    span {
        color: var(--color-primary);
    }
    ul {
        list-style: none;
        li {
            display: inline-block;
            padding: 0 45px 0 0;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
        }
    }
    footer {
        margin-bottom: 30px;
    }
</style>