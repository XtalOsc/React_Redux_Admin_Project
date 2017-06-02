import * as types from './actionTypes';

export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}//end beginAjaxCall()

export function ajaxCallError() {
  return {type: types.AJAX_CALL_ERROR};
}//end ajaxCallError
