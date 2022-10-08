<template>
  <div class="container mt-4 text-center">
    <h2>Закрытый каталог автомобилей</h2>
    <h4 class="mt-4 mb-1"><b>Описание:</b></h4>
    <p>Система позволяет добавлять автомобили в каталог</p>
    <hr />
    <h4 class="mt-4 mb-1"><b>Технологии:</b></h4>
    <p class="mb-1">Backend: PHP, MySQL, Laravel 9.</p>
    <p>
      Frontend: HTML, CSS, Bootstrap 5, JavaScript, Vue 3 with Composition API.
    </p>
    <hr />
    <h4 class="mt-4 mb-4"><b>Описание страниц:</b></h4>
    <div class="row">
      <div class="col-3">
        <div class="list-group" id="list-tab" role="tablist">
          <a
            class="list-group-item list-group-item-action active"
            id="list-main-list"
            data-bs-toggle="list"
            href="#list-main"
            role="tab"
            aria-controls="list-main"
            >Main</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-brands-list"
            data-bs-toggle="list"
            href="#list-brands"
            role="tab"
            aria-controls="list-brands"
            >Brands</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-models-list"
            data-bs-toggle="list"
            href="#list-models"
            role="tab"
            aria-controls="list-models"
            >Models</a
          >
          <a
            class="list-group-item list-group-item-action"
            id="list-cars-list"
            data-bs-toggle="list"
            href="#list-cars"
            role="tab"
            aria-controls="list-cars"
            >Cars</a
          >
        </div>
      </div>
      <div class="col-9">
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane pt-4 fade show active"
            id="list-main"
            role="tabpanel"
            aria-labelledby="list-main-list"
          >
            Описание работы приложения, навигации и работы со списками.
          </div>
          <div
            class="tab-pane pt-4 fade"
            id="list-brands"
            role="tabpanel"
            aria-labelledby="list-brands-list"
          >
            Страница марок содержит кнопку "Add Brand" и таблицу со списком.
            марок.
          </div>
          <div
            class="tab-pane pt-4 fade"
            id="list-models"
            role="tabpanel"
            aria-labelledby="list-models-list"
          >
            Страница моделей содержит кнопку "Add Model" и таблицу со списком
            моделей.
          </div>
          <div
            class="tab-pane pt-4 fade"
            id="list-cars"
            role="tabpanel"
            aria-labelledby="list-cars-list"
          >
            Страница автомобилей содержит Кнопку "Add Car" и таблицу со списком
            автомобилей.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>
