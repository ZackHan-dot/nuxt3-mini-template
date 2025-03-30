<template>
    <div class="article-card bg-white rounded flex gap-x-5">
        <div>
            <div class="article-time">{{ data?.time || '-' }}</div>
            <div class="article-title">
                {{ data?.title || '-' }}
            </div>
            <div class="article-overview">
                {{ data?.overview || '-' }}
            </div>
        </div>
        <div class="article-image">
            <img :src="data?.imgUrl" alt="文章插图" />
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    data: {
        type: Object,
        default: () => ({}),
    },
});
</script>
<style lang="scss" scoped>
.article-card {
    padding: 41px 20px;
    border-radius: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .article-time {
        font-family: 思源黑体;
        font-size: 13px;
        font-weight: bold;
        line-height: 15.6px;
        color: #667085;
        margin-bottom: 30px;
    }

    .article-title {
        font-family: 思源黑体;
        font-size: 26px;
        font-weight: bold;
        line-height: 33.8px;
        color: #1d2939;
        margin-bottom: 10px;
    }

    .article-overview {
        font-family: 思源黑体;
        font-size: 18px;
        font-weight: bold;
        line-height: 27px;
        color: #475467;
    }

    .article-image {
        height: 210px;
        width: 300px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>
