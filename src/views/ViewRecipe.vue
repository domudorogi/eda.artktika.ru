<template>
  <layout-section>
    <grid-container>
      <grid-row v-if="!isLoading">
        <grid-col :classList="['col-12', 'col-md-3']">
          {{ recipe }}
          <img
            :class="[
              $customStyle['img-fluid'],
              $customStyle['border'],
              $customStyle['border-3'],
            ]"
            src=""
            alt=""
          />
        </grid-col>
        <grid-col :classList="['col-12', 'col-md-8', 'ms-auto']">
          <h1 :class="[$customStyle['mb-4']]">{{ recipe.title }}</h1>
          <div
            :class="[$customStyle['mb-4']]"
            v-html="recipe.description"
          ></div>
          <ul
            :class="[
              $customStyle['border'],
              $customStyle['mb-4'],
              $customStyle['list-group'],
              $customStyle['list-group-flush'],
            ]"
          >
            <li
              :class="[
                $customStyle['list-group-item'],
                $customStyle['d-flex'],
                $customStyle['flex-wrap'],
                $customStyle['justify-content-between'],
              ]"
            >
              <strong>Время приготовления:</strong>
              <span>{{ recipe.time }} мин.</span>
            </li>
            <li :class="[$customStyle['list-group-item']]">
              <grid-row :class="[$customStyle['align-items-center']]">
                <grid-col :classList="['col-8']">
                  <strong>Количество порций:</strong>
                </grid-col>
                <grid-col :classList="['col-4']">
                  <input
                    :class="[$customStyle['form-control']]"
                    @change="updateName"
                    type="number"
                    :value="recipe.portions"
                  />
                </grid-col>
              </grid-row>
            </li>
          </ul>
          <table
            :class="[$customStyle['table'], $customStyle['table-bordered']]"
          >
            <thead :class="[$customStyle['table-dark']]">
              <tr>
                <td><strong>Название</strong></td>
                <td><strong>Количество</strong></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in recipe.products" :key="index">
                <td :class="[$customStyle['p-2'], $customStyle['w-75']]">
                  {{ product.name }}
                </td>
                <td :class="[$customStyle['p-2'], $customStyle['w-25']]">
                  <strong>{{ product.quantity }} {{ product.value }}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </grid-col>
      </grid-row>
      <ui-skeleton v-else />
    </grid-container>
  </layout-section>
</template>

<script>
import GridContainer from "@/components/grid/GridContainer";
import GridRow from "@/components/grid/GridRow";
import GridCol from "@/components/grid/GridCol";
import LayoutSection from "@/components/layout/LayoutSection";
import UiSkeleton from "@/components/ui/UiSkeleton";
import { mapGetters } from "vuex";

export default {
  name: "ViewRecipe",
  components: {
    GridContainer,
    GridRow,
    GridCol,
    LayoutSection,
    UiSkeleton,
  },
  data() {
    return {
      pageId: this.$route.params.id,
      isLoading: true,
      products: [],
    };
  },
  computed: {
    ...mapGetters(["getPageRecipe"]),
    recipe() {
      return this.getPageRecipe;
    },
  },
  methods: {
    updateName() {
      this.$store.dispatch("calcComposition", { v1: "4", v2: "3" }); // update vuex store state
    },
  },
  mounted() {
    //this.recipe.title = this.getRecipe(this.pageId).title;
    setTimeout(() => (this.isLoading = false), 600);
  },
  created() {
    this.$store.dispatch("loadRecipe", this.pageId);
  },
};
</script>

<style lang="scss" module></style>
