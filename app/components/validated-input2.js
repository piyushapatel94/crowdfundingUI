import Ember from 'ember';

const {
    computed,
    defineProperty
} = Ember;

export default Ember.Component.extend({
    classNames: ['validated-input2'],
    classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],
    model: null,
    value: null,
    type: '',
    textarea: true,
    valuePath: '',
    placeholder: '',
    validation: null,
    isTyping: false,
    showValidations: false,
    errormessage1: '',
    errormessage2: '',
    errormessage3: '',
    errormessage4: '',
    errormessage5: '',
    errormessage6: '',
    errormessage7: '',

    notValidating: computed.not('validation.isValidating').readOnly(),
    didValidate: computed.oneWay('targetObject.didValidate'),
    hasContent: computed.notEmpty('value').readOnly(),
    hasWarnings: computed.notEmpty('validation.warnings').readOnly(),
    isValid: computed.and('hasContent', 'validation.isTruelyValid').readOnly(),
    isInvalid: computed.oneWay('validation.isInvalid'),
    shouldDisplayValidations: computed.or('showValidations', 'didValidate', 'hasContent').readOnly(),

    showErrorClass: computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly(),
    showErrorMessage: computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly(),
    showWarningMessage: computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly(),
    showMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function() {
        return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
    }),

    init() {
        this._super(...arguments);
        let valuePath = this.get('valuePath');

        defineProperty(this, 'validation', computed.readOnly(`model.validations.attrs.${valuePath}`));
        defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
    },

    focusOut() {
        this._super(...arguments);
        this.set('showValidations', true);
        this.set('errormessage1', '');
        this.set('errormessage2', '');
        this.set('errormessage3', '');
        this.set('errormessage4', '');
        this.set('errormessage5', '');
        this.set('errormessage6', '');
        this.set('errormessage7', '');
    },

    focusIn() {
        this.set('errormessage1', '');
        this.set('errormessage2', '');
        this.set('errormessage3', '');
        this.set('errormessage4', '');
        this.set('errormessage5', '');
        this.set('errormessage6', '');
        this.set('errormessage7', '');
    }
});