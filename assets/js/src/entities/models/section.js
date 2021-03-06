/**
 * Tailor.Models.Section
 *
 * The section model.
 *
 * @augments Backbone.Model
 */
var SectionModel;

SectionModel = Backbone.Model.extend( {

    /**
     * The default parameters for a section.
     *
     * @since 1.0.0
     *
     * @returns object
     */
	defaults: {
		id : '',
		title : '',
		description : '',
		priority : 0,
		panel : ''
	}
} );

module.exports = SectionModel;