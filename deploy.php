<?php

namespace Deployer;

require 'recipe/common.php';

use Symfony\Component\Dotenv\Dotenv;

require_once __DIR__ . '/vendor/autoload.php';

$dotenv = new Dotenv();
$dotenv->loadEnv(__DIR__ . '/.env');

set('application', 'mastermind');

set('repository', $_ENV['GIT_REPO']);

set('git_tty', true);

set('keep_releases', 3);

host($_ENV['HOST'])
    ->hostname($_ENV['HOSTNAME'])
    ->set('deploy_path', $_ENV['DEPLOY_PATH']);

set('shared_files', ['.env']);

set('shared_dirs', []);

set('writable_dirs', []);

task('deploy:build-assets', function () {
    if (has('previous_release')) {
        run('cp -R {{previous_release}}/node_modules {{release_path}}/node_modules 2>/dev/null || :');
    }
    run('cd {{release_path}} && yarn install && ' . $_ENV['QUASAR_BINARY_PATH'] . ' build -m pwa', [
        'timeout' => 0,
    ]);
});

task('deploy:clean', function () {
    run('cd {{release_path}} && shopt -s extglob && export GLOBIGNORE=dist && rm -rf *');
});

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:build-assets',
    'deploy:writable',
    'deploy:symlink',
    'deploy:clean',
    'cleanup',
]);

after('deploy:failed', 'deploy:unlock');
after('cleanup', 'deploy:unlock');
