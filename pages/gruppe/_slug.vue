<template>
  <section>
    <img
      :srcset="imageSrc.srcSet"
      class="hero-image"
    >
    <h1>{{ group.name }}</h1>
    <p>{{ group.text }}</p>
    <NuxtLink
      to="/mitmachen"
      tag="button"
      class="button primary"
    >
      <span class="label">Kontaktformular</span>
    </NuxtLink>
    <div
      v-if="group.videoSrc"
      class="yt-video lazyload group-video"
    >
      <iframe
        title="Gruppen Vorstellungsvideo"
        :src="group.videoSrc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowfullscreen
      />
    </div>
    <Random
      :items="groups"
      @randomize="redirectToGroup"
    />
    <Follow />
    <NuxtLink
      to="/"
      class="is-underlined"
    >
      Zurück
    </NuxtLink>
  </section>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import {
  Follow,
  Random,
} from '~/components';
import groups from '~/data/groups';

export default {
  components: {
    Follow,
    Random,
  },
  asyncData({ payload, params, error }) {
    if (payload) return payload;

    const group = groups.find((g) => g.slug === params.slug);
    if (group) {
      return { group };
    }

    return error({ statusCode: 404, message: 'Gruppe nicht gefunden' });
  },
  data() {
    return {
      groups,
    };
  },
  computed: {
    imageSrc() {
      return require(`~/assets/images/${this.group.imgSrc}?resize`);
    },
  },
  methods: {
    redirectToGroup(group) {
      setTimeout(() => {
        window.location.href = `/gruppe/${group.slug}`;
      }, 1500);
    },
  },
};
</script>
