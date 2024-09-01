export function CustomOperator() {
    /** @type {Map<String,CallableFunction>}*/
    this.operators = new Map();
}

/**
 * Method to add more callbacks to the object
 * @param {String} operatorName name of the operator
 * @param {CallableFunction} callback the function will be used for the operatorName
 */
CustomOperator.prototype.addOperator = function(operatorName, callback) {
    this.operators.set(operatorName, callback);
}

/**
 * This method return a callback asociated to the operator
 * @param {String} operatorName 
 * @returns CallableFunction
 */
CustomOperator.prototype.getOperator = function(operatorName) {
    return this.operators.get(operatorName);
}