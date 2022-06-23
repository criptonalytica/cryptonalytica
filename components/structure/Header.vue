<template>
    <header>
        <section class="container flex between middle">
            <div id="logo">
                <img src="~/assets/img/logo-black.svg" width="188" alt="CryptoNalytica">
            </div>

            <nav>
                <ul>
                    <li class="current"><NuxtLink to="#">Overview</NuxtLink></li>
                    <li><NuxtLink to="#">Index list</NuxtLink></li>
                    <li><NuxtLink to="#">New coins</NuxtLink></li>
                    <li><NuxtLink :to="{path: '/', hash: '#performance-by-category'}">Categories</NuxtLink></li>
                    <li><NuxtLink to="#">Portfólio</NuxtLink></li>
                    <li><NuxtLink to="#">Alerts</NuxtLink></li>
                </ul>
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

// export default {
//     components: {
//         nButton,
//     },
    
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
    }
    
</style>>
