<template>
    <div class="home">
        <div class="home__content">
            <div class="home__title">
                Minimal blog template for creative expressions
            </div>
            <div class="home__description">
                100% customisable and SEO-friendly blog template for personal
                and commercial purposes.
            </div>
        </div>
        <div class="articles">
            <div class="articles__container">
                <div class="articles__header">每日新闻</div>
                <div class="articles__list">
                    <div v-for="item in state.articleList" :key="item.time">
                        <info :data="item" />
                    </div>
                </div>
                <div class="articles__header">每日新闻</div>
                <div class="articles__list articles__list--spaced">
                    <div v-for="item in state.articleList" :key="item.time">
                        <info :data="item" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const state = reactive({
    articleList: [
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_1.png',
        },
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_2.png',
        },
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_3.png',
        },
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_1.png',
        },
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_2.png',
        },
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_3.png',
        },
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_1.png',
        },
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_2.png',
        },
        {
            title: '10 Hilarious Cartoons That Depict Real-Life Problems of Programmers',
            time: 'AUGust 13, 2021',
            overview:
                'Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.',
            imgUrl: '/image/home/article_illustration_3.png',
        },
    ],
});
</script>

<style lang="scss" scoped>
/* 主页容器样式 */
.home {
    margin-top: 120px;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 80px;
    }

    &__title {
        font-family: 思源黑体, sans-serif;
        font-size: 76px;
        font-weight: bold;
        line-height: 91.2px;
        text-align: center;
        letter-spacing: -2.28px;
        background: linear-gradient(100deg, #c41740 4%, #ea9c28 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    &__description {
        max-width: 690px;
        margin-top: 20px;
        font-family: 思源黑体, sans-serif;
        font-size: 28px;
        font-weight: bold;
        line-height: 42px;
        text-align: center;
        letter-spacing: normal;
        color: #475467;
    }
}

/* 文章列表样式 */
.articles {
    padding: 80px 0;
    background: #f2f4f7;

    &__container {
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px;
    }

    &__header {
        font-family: 思源黑体;
        font-size: 26px;
        font-weight: bold;
        line-height: 33.8px;
        color: #1d2939;
        margin-bottom: 30px;
    }

    &__list {
        margin-bottom: 100px;

        &--spaced {
            margin-bottom: 0;
        }
    }
}
</style>
