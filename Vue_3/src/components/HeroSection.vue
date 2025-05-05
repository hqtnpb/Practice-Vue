<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-section-inner">
        <h1 class="hero-section__title">
          Make <span class="hero-section__title--high-light"> Management</span> Way More Easier Than
          Ever
        </h1>
        <p class="hero-section__desc">
          The online collaborative management platform to bring more efficiency and performace
        </p>
        <div class="hero-section__btn-list">
          <Button class="hero-section__btn" is-active="true" @click="handleClick">
            Request Demo
          </Button>
          <Button class="hero-section__btn">Contact Us</Button>
        </div>

        <div class="hero-section__media">
          <div class="media-sidebar">
            <div class="media-sidebar__top">
              <img src="../assets/img/bar_icon.svg" alt="" class="media-sidebar__icon" />
              <img src="../assets/img/dashboard_icon.svg" alt="" class="media-sidebar__icon" />
              <h3 class="media-sidebar__list-title">Dashboard</h3>
            </div>
            <div class="media-sidebar__list">
              <div class="media-sidebar__item">
                <h4 class="media-sidebar__item-title">Collections</h4>
                <ul class="media-sidebar__collections-list">
                  <li class="media-sidebar__collection-item">School</li>
                  <li class="media-sidebar__collection-item">Personal</li>
                </ul>
              </div>
              <div class="media-sidebar__item"></div>
            </div>
          </div>
          <div class="media-content">
            <div class="media-content__left">
              <img src="" alt="" class="media-content__top-icon" />
              <h4 class="media-content__left-title">School</h4>
              <div class="media-content__list-task">
                <input type="checkbox" name="task" id="task" />
                <label for="task"></label>
              </div>
              <div class="media-content__list-task">
                <input type="checkbox" name="task" id="task" />
                <label for="task"></label>
              </div>
            </div>
            <div class="media-content__right">
              <img src="" alt="" class="media-content__top-icon" />
              <img src="" alt="" class="media-content__top-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import Button from './ButtonBase.vue'
import { RouterLink } from 'vue-router'
const handleClick = (e) => {}
</script>
<style lang="scss">
.hero-section-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-section {
  &__title {
    width: 873px;
    color: #f9f9f9;
    text-align: center;
    font-size: 6rem;
    font-weight: 700;
    line-height: 1.17; /* 116.667% */
    &--high-light {
      background: linear-gradient(90deg, #eb9204 -33.14%, #83e868 116.38%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }
  }

  &__desc {
    margin-top: 34px;
    width: 447px;
    color: #858b93;
    font-size: 16px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
  }
  &__btn-list {
    display: flex;
    margin-top: 44px;
    gap: 20px;
  }
  &__media {
    margin-top: 111px;
    width: 848px;
    height: 366px;
    border-radius: 8px 8px 0px 0px;
    background: #1f2326;
  }
  .media-sidebar {
    width: 23%;
    height: 100%;
    padding-top: 20px;
    padding-left: 16px;
    &__top {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    &__list-title {
      color: #98989c;
      font-size: 1.4rem;
      font-weight: 600;
    }
    &__list {
      margin-top: 20px;
    }
    &__item-title {
      color: #f9f9f9;
      font-size: 1.4rem;
      font-weight: 600;
    }
    &__collections-list {
      margin-top: 12px;
    }
    &__collection-item {
      position: relative;
      height: 39px;
      width: 100%;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 25px;
      color: #858b93;
      font-size: 1.2rem;
      font-weight: 400;
      &:hover {
        color: #d5d5d6;
        font-size: 1.2rem;
        font-weight: 600;
        background: #2b2d2f;
      }
      &::before {
        content: '';
        position: absolute;
        width: 17px;
        height: 17px;
        border-radius: 5px;
        background-color: #ae8ff9;
        top: 50%;
        left: 0;
        transform: translateY(-60%);
      }
      &:nth-child(2)::before {
        background-color: #ff7667;
      }
    }
  }
}
</style>
