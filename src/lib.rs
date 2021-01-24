mod utils;

use wasm_bindgen::prelude::*;
use js_sys::Array;
use rand::{self, Rng};


pub enum Status { Empty, Visited, Mine, Marked }
// const MINE_RATIO: f32 = 0.25;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}


fn get_random_number(min: usize, max: usize) -> usize {
    let mut rng = rand::thread_rng();
    
    rng.gen_range(min,max)
}

fn get_random_position(max: usize) -> (usize, usize) {
    let x = get_random_number(0, max);
    let y = get_random_number(0, max);
  
    (x, y)
}

// fn get_number_of_mines(size: usize) -> usize {
//     (size * size) / MINE_RATIO as usize
// }

fn get_new_line(line_size: usize) -> Array {
    let new_line = vec![0; line_size];
    new_line.into_iter().map(JsValue::from).collect()
}

fn add_mines_to_board(board: &Vec<Array>, size: usize) -> Vec<Array>{
    let (x, y) = get_random_position(size);
    let board_position = &board[x].to_vec()[y];
    if JsValue::from(board_position) == JsValue::from(1) {
        add_mines_to_board(&board, size);
    }
    board[x].to_vec()[y] = JsValue::from(1);
    println!("{:?}", board);
    board.clone()
}

#[wasm_bindgen]
pub fn create_board(size: usize) -> Array {
    utils::set_panic_hook();
    let mut board: Vec<Array> = Vec::new();
    let mines = 10;
    for _ in 0..size {
        let new_line:Array = get_new_line(size);
        board.push(new_line);
    }


    for _ in 0..mines {
       board = add_mines_to_board(&board, size);
    }

    board.into_iter().collect()
}
