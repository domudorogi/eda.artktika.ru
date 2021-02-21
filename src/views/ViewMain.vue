<template>
  <layout-section>
    <grid-container>
      <grid-row>
        <grid-col :classList="['col-12', 'col-md-3']"></grid-col>
        <grid-col :classList="['col-12', 'col-md-9']">
          <grid-row>
            <grid-col
              v-for="(recipe, index) in recipes"
              :key="index"
              :classList="['col-12', 'col-md-4']"
            >
              <ui-card :recipe="recipe" />
            </grid-col>
          </grid-row>
        </grid-col>
      </grid-row>
    </grid-container>
  </layout-section>
</template>

<script>
import GridContainer from "@/components/grid/GridContainer";
import GridRow from "@/components/grid/GridRow";
import GridCol from "@/components/grid/GridCol";
import LayoutSection from "@/components/layout/LayoutSection";
import UiCard from "@/components/ui/UiCard";
import { mapGetters } from "vuex";

export default {
  name: "ViewMain",
  components: {
    GridContainer,
    GridRow,
    GridCol,
    LayoutSection,
    UiCard,
  },
  computed: {
    ...mapGetters(["getRecipes"]),
    recipes() {
      return this.getRecipes;
    },
  },
};
</script>

<style lang="scss" module></style>
