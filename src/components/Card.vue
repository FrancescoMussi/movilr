<template>
  <div>
    <div
      class="card"
      :data-badge="show.rating.average"
      :class="{
        'card__badge-yellow': show.rating.average < 8 && show.rating.average > 6,
        'card__badge-red': show.rating.average <= 6,
        'card__badge-green': show.rating.average >= 8
      }"
    >
      <div class="card__image">
        <figure class="image" v-if="show.image">
          <img :src="show.image.medium" alt="Image" />
        </figure>
        <figure class="image" v-if="!show.image">
          <img src="https://via.placeholder.com/210x295" alt="Image" />
        </figure>
      </div>
    </div>
    <p class="card__title">{{ show.name }}</p>
    <p class="card__genres">
      <span v-for="(genre, indexGenre) in show.genres" :key="indexGenre">
        {{ genre }}
        <span v-if="indexGenre !== show.genres.length - 1">,</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    show: Object
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 85%;
  position:relative;
}
.card[data-badge]:after {
  content:attr(data-badge);
  position:absolute;
  top:-10px;
  right:-10px;
  font-size:.6rem;
  font-weight: bold;
  color:white;
  width:1.6rem;
  height:1.6rem;
  text-align:center;
  line-height:1.6rem;
  border-radius:50%;
}
.card__image {
  -webkit-box-shadow: 0px 0px 7px 2px rgba(207,205,207,1);
  -moz-box-shadow: 0px 0px 7px 2px rgba(207,205,207,1);
  box-shadow: 0px 0px 7px 2px rgba(207,205,207,1);
}
.card__badge-red:after {
  background: #C70B0B;
}

.card__badge-yellow:after {
  background: #E1BE56;
}

.card__badge-green:after {
  background: #239560;
}

.card__title {
  font-weight: 800;
}

.card__genres {
  font-size: 0.7rem;
  color: #777;
}
</style>
