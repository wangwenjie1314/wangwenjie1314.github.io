//requirejs config add by wwj  0716
requirejs.config({
    baseUrl: 'statics/js',
    shim:{
    	'bootstrap':['jquery'],
    	'dropdown':['jquery'],
    	'collapse':['jquery']
    },
    paths: {
        'jquery': [
             'jquery.min',
             'http://libs.baidu.com/jquery/1.11.1/jquery.min'
        ],
        'collapse':'collapse',
        'dropdown':'dropdown',
        'domReady':'require.domReady',
        'bootstrap': 'bootstrap.min',
        'template': 'template',
    }
});