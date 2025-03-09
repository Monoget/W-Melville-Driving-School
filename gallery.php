<!doctype html>
<html class="no-js" lang="zxx">

<head>
    <!-- Required Meta Tags Start -->
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Melville Driving School</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Required Meta Tags End -->


    <?php include 'include/css.php'; ?>

    <!-- Fancybox 4 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css">

    <style>
        .gallery img {
            width: 100%;
            height: auto;
            border-radius: 5px;
            transition: 0.3s;
            cursor: pointer;
        }
        .gallery img:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body>

<?php include 'include/menu.php'; ?>


    <main>
    <!-- |==========================================| -->
    <!-- |=====|| Page Title Start ||===============| -->
    <section class="pageTitleRs1 pageTitleRs1__bg4">
        <div class="pageTitleRs1__padding">
            <div class="container_m_30">
                <div class="row">
                    <div class="col-lg-12 col_padding">
                        <div class="pageTitleRs1__content">
                            <h1>Gallery</h1>
                            <div class="pageTitleRs1__bread-crumb">
                                <ul>
                                    <li><a href="home">Home</a></li>
                                    <li><a href="#">Gallery</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- |=====|| Page Title End ||=================| -->
    <!-- |==========================================| -->

    <section class="blogPageRs2">
        <div class="content_box_120_70">
            <div class="container_m_30">
                <div class="row gallery">
                    <div class="col-md-4 mb-4">
                        <a href="assets/img/blog/blog-01.jpg" data-fancybox="gallery" data-caption="Nature 1">
                            <img src="assets/img/blog/blog-01.jpg" class="img-fluid" alt="Nature 1">
                        </a>
                    </div>
                    <div class="col-md-4 mb-4">
                        <a href="assets/img/blog/blog-02.jpg" data-fancybox="gallery" data-caption="Water">
                            <img src="assets/img/blog/blog-02.jpg" class="img-fluid" alt="Water">
                        </a>
                    </div>
                    <div class="col-md-4 mb-4">
                        <a href="assets/img/blog/blog-03.jpg" data-fancybox="gallery" data-caption="Forest">
                            <img src="assets/img/blog/blog-03.jpg" class="img-fluid" alt="Forest">
                        </a>
                    </div>
                    <div class="col-md-4 mb-4">
                        <a href="assets/img/blog/blog-04.jpg" data-fancybox="gallery" data-caption="Forest">
                            <img src="assets/img/blog/blog-04.jpg" class="img-fluid" alt="Forest">
                        </a>
                    </div>
                    <div class="col-md-4 mb-4">
                        <a href="assets/img/blog/blog-05.jpg" data-fancybox="gallery" data-caption="Forest">
                            <img src="assets/img/blog/blog-05.jpg" class="img-fluid" alt="Forest">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>


<?php include 'include/footer.php'; ?>


<?php include 'include/js.php'; ?>

<!-- Fancybox 4 JS -->
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>

<!-- Initialize Fancybox -->
<script>
    Fancybox.bind("[data-fancybox='gallery']", {
        zoom: true,
        hideScrollbar: false
    });
</script>

</body>
</html>
