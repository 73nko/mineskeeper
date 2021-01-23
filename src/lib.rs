mod utils;

use wasm_bindgen::prelude::*;
use js_sys::Array;

pub enum Status { Empty, Visited, Mine, Marked }

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}


pub fn get_new_line(line_size: usize) -> Array {
    let new_line = vec![0; line_size];

    new_line.into_iter().map(JsValue::from).collect()
}

#[wasm_bindgen]
pub fn create_board(size: usize) -> Array {
    let mut board: Vec<Array> = Vec::new();
    for _ in 0..size {
        let new_line:Array = get_new_line(size);
        board.push(new_line);
    }

    board.into_iter().collect()
}