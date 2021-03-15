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
      <div
        :class="[
          $customStyle['d-flex'],
          $customStyle['justify-content-between']
        ]"
      >
        <ui-button
          :to="/recipe/ + recipe.id"
          :class="[$customStyle['btn-primary'], $customStyle['btn']]"
        >
          Подробнее
        </ui-button>
        <ui-button
          :class="buttonFavoriteClasses"
          @click="
            setFavoriteRecipe()
            showAlert()
          "
        >
          ★
        </ui-button>
      </div>
    </div>
  </div>
  <ui-alert v-if="isActiveAlert" :class="alertClasses" v-html="alertText" />
</template>

<script>
import { computed, getCurrentInstance, ref } from 'vue'
import { useStore } from 'vuex'
import UiBadge from '@/components/ui/UiBadge'
import UiButton from '@/components/ui/UiButton'
import UiAlert from '@/components/ui/UiAlert'

export default {
  name: 'UiCard',
  components: {
    UiBadge,
    UiButton,
    UiAlert
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const { proxy } = getCurrentInstance()
    const isActiveAlert = ref(false)
    const isActiveFavoriteButton = computed(() => {
      return store.getters.getFavoriteRecipes.some(
        recipe => recipe.id == props.recipe.id
      )
    })
    const buttonFavoriteClasses = computed(() => {
      const activeClass = isActiveFavoriteButton.value
        ? proxy.$customStyle['btn-primary']
        : proxy.$customStyle['btn-outline-primary']
      return [proxy.$customStyle['btn'], activeClass]
    })
    const alertClasses = computed(() => {
      const activeClass = isActiveFavoriteButton.value
        ? proxy.$customStyle['alert-success']
        : proxy.$customStyle['alert-danger']
      return [
        proxy.$customStyle['alert'],
        proxy.$style['alert-fixed'],
        activeClass
      ]
    })
    const alertText = computed(() => {
      return isActiveFavoriteButton.value
        ? `Рецепт <strong>${props.recipe.title}</strong> добавлен в избранное`
        : `Рецепт <strong>${props.recipe.title}</strong> удален из избранного`
    })

    function setFavoriteRecipe () {
      store.commit('SET_FAVORITE_RECIPES', props.recipe.id)
    }

    function showAlert () {
      isActiveAlert.value = true
      setTimeout(() => (isActiveAlert.value = false), 2000)
    }

    return {
      setFavoriteRecipe,
      isActiveFavoriteButton,
      isActiveAlert,
      buttonFavoriteClasses,
      alertClasses,
      showAlert,
      alertText
    }
  }
}
</script>

<style lang="scss" module>
.alert-fixed {
  position: fixed;
  z-index: 10;
  left: 1.5rem;
  bottom: 1.5rem;
  max-width: 50rem;
}
</style>
