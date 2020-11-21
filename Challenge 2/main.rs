fn main() {
    let mut res = 0;
    let mut curr = 1;
    let mut n = 2;
    while curr < 4000000 {
        if &curr % 2 == 0 {
            res += &curr;
        }
        let now = &curr + &n;
        curr = n;
        n = now;
    }

    println!("{}", res);
}
