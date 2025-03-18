function fun(n){
    if(n==0){
        return
    }
    console.log(n*(n-1)/2)
    fun(n-1)
}
fun(10);