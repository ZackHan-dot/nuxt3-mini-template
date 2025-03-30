<template>
    <div class="adetail">
        <div class="adetail__wrapper">
            <div class="adetail__title">
                10 hilarious NFT sales that broke the internet
            </div>
            <div class="adetail__description">
                AUGust 13, 2021 • Daily digest
            </div>
        </div>
        <div class="content">
            <img :src="detailData?.imgUrl" alt="文章插图" />
            <p>
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
            </p>
            <p>
                Not so fast, I'd say, there are some redeeming factors in favor
                of greeking text, as its use is merely the symptom of a worse
                problem to take into consideration.
            </p>
            <p>
                The toppings you may chose for that TV dinner pizza slice when
                you forgot to shop for foods, the paint you may slap on your
                face to impress the new boss is your business. But what about
                your daily bread?
            </p>
            <img src="/image/posts/article_desert.png" alt="文章插图" />
            <p>
                The toppings you may chose for that TV dinner pizza slice when
                you forgot to shop for foods, the paint you may slap on your
                face to impress the new boss is your business. But what about
                your daily bread? Not so fast, I'd say, there are some redeeming
                factors in favor of greeking text, as its use is merely the
                symptom of a worse problem to take into consideration.
            </p>
            <p>
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
            </p>
            <h2>
                Design comps, layouts, wireframes—we believe that clients will
                surely accept that you go about things the facile way. It’s a
                matter of time.
            </h2>
            <p>
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
            </p>
            <p>
                The toppings you may chose for that TV dinner pizza slice when
                you forgot to shop for foods, the paint you may slap on your
                face to impress the new boss is your business. But what about
                your daily bread? Not so fast, I'd say, there are some redeeming
                factors in favor of greeking text, as its use is merely the
                symptom of a worse problem to take into consideration.
            </p>
            <p>
                Not so fast, I'd say, there are some redeeming factors in favor
                of greeking text, as its use is merely the symptom of a worse
                problem to take into consideration.
            </p>
            <p>
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    detailData: {
        type: Object,
        default: () => ({
            imgUrl: '/image/posts/article_illustration_2.png',
        }),
    },
});
</script>
<style lang="scss" scoped>
.adetail {
    margin-top: 120px;
    &__wrapper {
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
        font-family: 思源黑体;
        text-align: center;
        letter-spacing: normal;
        font-family: 思源黑体;
        font-weight: 700;
        font-size: 13px;
        line-height: 15.6px;
        color: #475467;
    }

    .content {
        font-family: 思源黑体;
        font-size: 18px;
        font-weight: bold;
        line-height: 27px;
        letter-spacing: normal;
        color: #1d2939;
        max-width: 1120px;
        margin: 0 auto;
        padding: 0 16px;
        > p {
            margin: 50px 0;
        }
        > h2 {
            font-family: 思源黑体;
            font-size: 32px;
            font-weight: bold;
            line-height: 44.8px;
            letter-spacing: normal;
            color: #1d2939;
            padding-left: 22px;
            border-left: 8px solid #c41740;
        }
    }
}
</style>
