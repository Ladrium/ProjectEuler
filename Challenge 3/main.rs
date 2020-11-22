fn main() {
    let mut n: i64 = 600851475143;
    let mut i: i64 = 2;

    while i <= n {
        if &n % &i == 0 {
            n /= &i;
        } else {
            i += 1;
        }
    }
    println!("{}", i);
}
