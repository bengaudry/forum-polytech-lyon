<template>
  <div class="company-card-skeleton" aria-hidden="true">
    <div class="skeleton skeleton-logo"></div>
    <div class="skeleton skeleton-title"></div>
    <div class="skeleton skeleton-line"></div>
    <div class="skeleton skeleton-line skeleton-line-short"></div>
    <div class="skeleton-pills">
      <span class="skeleton skeleton-pill"></span>
      <span class="skeleton skeleton-pill"></span>
      <span class="skeleton skeleton-pill"></span>
    </div>
  </div>
</template>

<style scoped>
.company-card-skeleton {
  display: flex;
  max-width: 400px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(160deg, #ffffff 0%, #f8fbff 100%);
  border: 1px solid #e7e7e7;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
  padding: 48px 32px 32px;
}

.skeleton {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #e6eaf1;
}

.skeleton::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(
    90deg,
    rgba(230, 234, 241, 0) 0%,
    rgba(255, 255, 255, 0.7) 50%,
    rgba(230, 234, 241, 0) 100%
  );
  animation: skeleton-shimmer 1.3s infinite;
}

.skeleton-logo {
  width: 70%;
  height: 60px;
  margin-bottom: 1.15rem;
}

.skeleton-title {
  width: 62%;
  height: 26px;
  margin-bottom: 0.7rem;
}

.skeleton-line {
  width: 100%;
  height: 16px;
  margin-bottom: 0.5rem;
}

.skeleton-line-short {
  width: 82%;
  margin-bottom: 0.9rem;
}

.skeleton-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skeleton-pill {
  width: 58px;
  height: 24px;
  border-radius: 999px;
}

@keyframes skeleton-shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>

