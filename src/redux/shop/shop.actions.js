import ShopActionTypes from './shop.types';

export const fetchTextbooksStart = () => ({
  type: ShopActionTypes.FETCH_TEXTBOOKS_START,
});

export const fetchTextbooksStartAsync = () => async (dispatch) => {
  try {
    // eslint-disable-next-line no-undef
    const res = await fetch(
      'http://krapipl.imumk.ru:8082/api/mobilev1/update',
      {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json;charset=utf-8',
        // },
        // body: JSON.stringify(),
      }
    );
    const { items } = await res.json();

    dispatch({
      type: ShopActionTypes.FETCH_TEXTBOOKS_SUCCESS,
      payload: items,
    });
  } catch (err) {
    dispatch({
      type: ShopActionTypes.FETCH_TEXTBOOKS_FAILURE,
      payload: err.response.statusText,
    });
  }
};
