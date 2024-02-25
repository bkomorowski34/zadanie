<?php
/*
Template Name: Tekst z obrazem
*/
?>
<?php get_header('header'); ?>
    <div id="primary" class="content-area">
        <main id="main" class="site-main">
            <div class="container">
                <div class="row">
                    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                        <div class="col-md-6">
                            <article id="post-<?php the_ID(); ?>" <?php post_class('random-class'); ?>>
                                <div class="entry-content">
                                    <?php the_content(); ?>
                                </div>
                            </article>
                        </div>
                        <div class="col-md-6">
                            <?php
                            $image = get_field('zdjecie');
                            if (!empty($image)) : ?>
                                <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
                            <?php else : ?>
                                <p>No image found</p>
                            <?php endif; ?>
                        </div>
                    <?php endwhile; endif; ?>
                </div>
            </div>
        </main>
    </div>
<?php get_footer('footer'); ?>