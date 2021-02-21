<template>
  <div :class="[$customStyle['card']]">
    <img
      :src="recipe.image[0].url"
      :class="[$customStyle['card-img-top']]"
      :alt="recipe.image[0].alt"
    />
    <div :class="[$customStyle['card-body']]">
      <h5 :class="[$customStyle['card-title']]">{{ recipe.title }}</h5>
      <div
        v-html="recipe.description"
        :class="[$customStyle['card-text']]"
      ></div>
    </div>
    <ul :class="[$customStyle['list-group'], $customStyle['list-group-flush']]">
      <li :class="[$customStyle['list-group-item']]">
        <strong>Время приготовления:</strong> {{ recipe.time }} мин.
      </li>
      <li :class="[$customStyle['list-group-item']]">
        <ui-badge v-for="(product, index) in recipe.products" :key="index">
          {{ product.name }}
        </ui-badge>
      </li>
    </ul>
    <div :class="[$customStyle['card-body']]">
      <a :href="/recipe/ + recipe.id" :class="[$customStyle['card-link']]">
        Подробнее
      </a>
    </div>
  </div>
</template>

<script>
import UiBadge from "@/components/ui/UiBadge";

export default {
  name: "UiCard",
  components: {
    UiBadge,
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  computed: {},
};
</script>

<style lang="scss" module></style>
