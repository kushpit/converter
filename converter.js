function convert() {
    // Получаем значения полей формы
    let valueFrom = parseFloat(document.getElementById("valueFrom").value);
    let unitFrom = document.getElementById("unitFrom").value;
    let unitTo = document.getElementById("unitTo").value;

    // Вычисляем коэффициент конвертации для выбранных единиц измерения
    let factors = {
        m: 1,
        cm: 0.01,
        in: 0.0254,
        mm: 0.001,
        yd: 0.9144,
        km: 1000,
        ft: 0.3048
    };
    let factor = factors[unitFrom] / factors[unitTo];

    // Выполняем конвертацию и выводим результат
    let result = valueFrom * factor;
    document.getElementById("result").innerHTML = result.toFixed(3) + " " + unitTo;
}
