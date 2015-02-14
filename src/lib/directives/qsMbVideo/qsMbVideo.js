/*global define*/
define( [
	'qvangular'
], function ( qvangular ) {
	'use strict';

	qvangular.directive( 'qsMbVideo', function () {

		return {
			restrict: "E",
			link: function ( $scope, $element, $attrs ) {

				$element.html( 'video' );

			}
		}

	} );

} );