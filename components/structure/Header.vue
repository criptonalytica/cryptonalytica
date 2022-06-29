<template>
    <header>
        <section class="container flex between middle">
            <div id="logo">
                <img src="~/assets/img/logo-black.svg" width="188" alt="CryptoNalytica">
            </div>

            <!-- <button id="responsive-trigger">
                <img :src="require(`~/assets/img/icons/menu.svg`)" width="32"></img>
            </button> -->

            <n-button @click="menuOpen=!menuOpen" id="responsive-trigger" size="medium" hierarchy="secondary" icon="menu"></n-button>

            <nav :class="{open:menuOpen}">
                <n-button @click="menuOpen=!menuOpen" class="hide" id="responsive-close" size="medium" hierarchy="secondary" icon="close"></n-button>

                <div id="logo-resp" class="logo hide">
                    <img src="~/assets/img/logo-icon.svg" width="32" alt="CryptoNalytica">
                </div>

                <ul>
                    <li class="current"><NuxtLink to="#">Overview</NuxtLink></li>
                    <li><NuxtLink to="#">Index list</NuxtLink></li>
                    <li><NuxtLink to="#">New coins</NuxtLink></li>
                    <li><NuxtLink :to="{path: '/', hash: '#performance-by-category'}">Categories</NuxtLink></li>
                    <li><NuxtLink to="#">Portfólio</NuxtLink></li>
                    <li><NuxtLink to="#">Alerts</NuxtLink></li>
                </ul>

                <div class="n-buttons flex middle gap-spacing-2-xs">
                    <n-button hierarchy="secondary">Login</n-button>
                    <n-button>Registrar</n-button>
                </div>
            </nav>

            <div class="n-buttons flex middle gap-spacing-2-xs">
                <n-button hierarchy="secondary">Login</n-button>
                <n-button>Registrar</n-button>
            </div>
        </section>
    </header>
</template>

<script>
// import nButton from '../components/ds/nButton.vue'

export default {
    data() {
        return {
            menuOpen: false,
        }
    }
}
    
// }
</script>

<style lang="scss" scoped>
    header {
        border: var(--border-grey-1);
        padding: var(--spacing-m) 0;
        background: white;
        margin-bottom: var(--spacing-4-xl);

        li {
            display: inline-block;
            vertical-align: middle;
            transition: .2s;

            &:hover {
                color: var(--color-primary);
            }

            &.current {
                font-weight: var(--text-weight-bold);
                color: var(--color-primary);
            }

            + li {
                margin-left: var(--spacing-xl);
            }
        }

        // Menu responsivo
        @media screen and (min-width: 961px) {
            .hide, nav .n-buttons {display: none;}
        }

        @media screen and (max-width: 960px) {
            .container > .n-buttons, nav {display: none;}
            nav {
                position: fixed;
                background: white;
                left: 0; right: 0;
                top: 0; bottom: 0;
                z-index: 999;

                flex-direction: column; align-items: center; justify-content: center;
                padding-top: 100px;
                // transition: .3s;

                li {
                    display: block;
                    text-align: center;
                    font-size: var(--text-h5-font-size);
                    transition: .4s;
                    + li {margin: 0;}
                }

                .logo {
                    width: 100%;
                    max-width: 280px;
                    margin-bottom: 60px;
                    margin-bottom: 44px;
                    padding-bottom: 40px;
                    border-bottom: var(--border-grey-1);
                    img {margin: auto;}
                }

                .n-buttons {
                    width: 100%;
                    max-width: 280px;
                    margin-top: 44px;
                    padding-top: 40px;
                    border-top: var(--border-grey-1);
                    justify-content: center;
                    // flex-direction: column;
                }

                #responsive-close {
                    position: fixed;
                    top: 40px;
                    left: 50%; transform: translateX(-50%);
                    margin-bottom: 40px;
                }
            }
        }

        nav.open {
            display: flex;
            li + li {margin: 20px 0 0 0;}
        }
    }
    
</style>>
