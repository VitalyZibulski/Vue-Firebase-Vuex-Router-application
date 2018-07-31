<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/workers" active-class="active">
            <a class="nav-link">Workers</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


</script>

<style scoped>

</style>