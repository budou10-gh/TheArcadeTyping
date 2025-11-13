browserEvents.I.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "i"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.T.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "t"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.E.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "e"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.U.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "u"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.R.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "r"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.Z.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "z"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.W.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "w"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.J.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "j"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.M.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "m"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.P.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "p"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.V.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "v"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.Y.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "y"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.D.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "d"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.X.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "x"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.S.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "s"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.C.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "c"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.N.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "n"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.O.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "o"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.K.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "k"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.H.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "h"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.Backspace.onEvent(browserEvents.KeyEvent.Pressed, function () {
    // ////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////
    if (input_roma.length == 0) {
        if (input_hira.length != 0) {
            input_hira = input_hira.substr(0, input_hira.length - 1)
        }
    } else {
        input_roma = input_roma.substr(0, input_roma.length - 1)
    }
    input_ui.setText("" + input_hira + input_roma)
})
browserEvents.B.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "b"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.L.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "l"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
// ローマ字変換表作成用関数
function ローマ字変換表作成 () {
    conv_hira = [
    "あ",
    "い",
    "う",
    "え",
    "お",
    "ぁ",
    "ぁ",
    "ぃ",
    "ぃ",
    "ぅ",
    "ぅ",
    "ぇ",
    "ぇ",
    "ぉ",
    "ぉ",
    "か",
    "か",
    "き",
    "く",
    "く",
    "け",
    "こ",
    "こ",
    "ゃ",
    "ゃ",
    "ゅ",
    "ゅ",
    "ょ",
    "ょ",
    "が",
    "ぎ",
    "ぐ",
    "げ",
    "ご",
    "っ",
    "っ",
    "さ",
    "し",
    "し",
    "し",
    "す",
    "せ",
    "せ",
    "そ",
    "うぁ",
    "うぃ",
    "うぃ",
    "うぇ",
    "うぇ",
    "うぉ",
    "ざ",
    "じ",
    "じ",
    "ず",
    "ぜ",
    "ぞ",
    "きゃ",
    "きぃ",
    "きゅ",
    "きぇ",
    "きょ",
    "た",
    "ち",
    "ち",
    "つ",
    "つ",
    "て",
    "と",
    "ぎゃ",
    "ぎぃ",
    "ぎゅ",
    "ぎぇ",
    "ぎょ",
    "だ",
    "ぢ",
    "づ",
    "で",
    "ど",
    "しゃ",
    "しゃ",
    "しぃ",
    "しゅ",
    "しゅ",
    "しぇ",
    "しぇ",
    "しょ",
    "しょ",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "じゃ",
    "じゃ",
    "じゃ",
    "じぃ",
    "じぃ",
    "じゅ",
    "じゅ",
    "じゅ",
    "じぇ",
    "じぇ",
    "じょ",
    "じょ",
    "じょ",
    "は",
    "ひ",
    "ふ",
    "ふ",
    "へ",
    "ほ",
    "ちゃ",
    "ちゃ",
    "ちゃ",
    "ちぃ",
    "ちぃ",
    "ちゅ",
    "ちゅ",
    "ちゅ",
    "ちぇ",
    "ちぇ",
    "ちぇ",
    "ちょ",
    "ちょ",
    "ちょ",
    "ば",
    "び",
    "ぶ",
    "べ",
    "ぼ",
    "てゃ",
    "てぃ",
    "てゅ",
    "てぇ",
    "てょ",
    "ぱ",
    "ぴ",
    "ぷ",
    "ぺ",
    "ぽ",
    "でゃ",
    "でぃ",
    "でゅ",
    "でぇ",
    "でょ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "にゃ",
    "にぃ",
    "にゅ",
    "にぇ",
    "にょ",
    "や",
    "ゆ",
    "よ",
    "ひゃ",
    "ひぃ",
    "ひゅ",
    "ひぇ",
    "ひょ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "びゃ",
    "びぃ",
    "びゅ",
    "びぇ",
    "びょ",
    "わ",
    "を",
    "ぴゃ",
    "ぴぃ",
    "ぴゅ",
    "ぴぇ",
    "ぴょ",
    "ん",
    "ん",
    "ふぁ",
    "ふぃ",
    "ふぇ",
    "ふぉ",
    "みゃ",
    "みぃ",
    "みゅ",
    "みぇ",
    "みょ",
    "りゃ",
    "りぃ",
    "りゅ",
    "りぇ",
    "りょ",
    "っか",
    "っか",
    "っき",
    "っく",
    "っく",
    "っけ",
    "っこ",
    "っこ",
    "っさ",
    "っし",
    "っし",
    "っす",
    "っせ",
    "っそ",
    "った",
    "っち",
    "っち",
    "っつ",
    "っつ",
    "って",
    "っと",
    "っは",
    "っひ",
    "っふ",
    "っふ",
    "っへ",
    "っほ",
    "っま",
    "っみ",
    "っむ",
    "っめ",
    "っも",
    "っや",
    "っゆ",
    "っよ",
    "っら",
    "っり",
    "っる",
    "っれ",
    "っろ",
    "ー"
    ]
    conv_roma = [
    "a",
    "i",
    "u",
    "e",
    "o",
    "la",
    "xa",
    "li",
    "xi",
    "lu",
    "xu",
    "le",
    "xe",
    "lo",
    "xo",
    "ka",
    "ca",
    "ki",
    "ku",
    "cu",
    "ke",
    "ko",
    "co",
    "lya",
    "xya",
    "lyu",
    "xyu",
    "lyo",
    "xyo",
    "ga",
    "gi",
    "gu",
    "ge",
    "go",
    "ltu",
    "xtu",
    "sa",
    "si",
    "shi",
    "ci",
    "su",
    "se",
    "ce",
    "so",
    "wha",
    "wi",
    "whi",
    "we",
    "whe",
    "who",
    "za",
    "zi",
    "ji",
    "zu",
    "ze",
    "zo",
    "kya",
    "kyi",
    "kyu",
    "kye",
    "kyo",
    "ta",
    "ti",
    "chi",
    "tu",
    "tsu",
    "te",
    "to",
    "gya",
    "gyi",
    "gyu",
    "gye",
    "gyo",
    "da",
    "di",
    "du",
    "de",
    "do",
    "sya",
    "sha",
    "syi",
    "syu",
    "shu",
    "sye",
    "she",
    "syo",
    "sho",
    "na",
    "ni",
    "nu",
    "ne",
    "no",
    "zya",
    "ja",
    "jya",
    "zyi",
    "jyi",
    "zyu",
    "ju",
    "jyu",
    "zye",
    "jye",
    "zyo",
    "jo",
    "jyo",
    "ha",
    "hi",
    "hu",
    "fu",
    "he",
    "ho",
    "tya",
    "cya",
    "cha",
    "tyi",
    "cyi",
    "tyu",
    "cyu",
    "chu",
    "tye",
    "cye",
    "che",
    "tyo",
    "cyo",
    "cho",
    "ba",
    "bi",
    "bu",
    "be",
    "bo",
    "tha",
    "thi",
    "thu",
    "the",
    "tho",
    "pa",
    "pi",
    "pu",
    "pe",
    "po",
    "dha",
    "dhi",
    "dhu",
    "dhe",
    "dho",
    "ma",
    "mi",
    "mu",
    "me",
    "mo",
    "nya",
    "nyi",
    "nyu",
    "nye",
    "nyo",
    "ya",
    "yu",
    "yo",
    "hya",
    "hyi",
    "hyu",
    "hye",
    "hyo",
    "ra",
    "ri",
    "ru",
    "re",
    "ro",
    "bya",
    "byi",
    "byu",
    "bye",
    "byo",
    "wa",
    "wo",
    "pya",
    "pyi",
    "pyu",
    "pye",
    "pyo",
    "nn",
    "xn",
    "fa",
    "fi",
    "fe",
    "fo",
    "mya",
    "myi",
    "myu",
    "mye",
    "myo",
    "rya",
    "ryi",
    "ryu",
    "rye",
    "ryo",
    "kka",
    "cca",
    "kki",
    "kku",
    "ccu",
    "kke",
    "kko",
    "cco",
    "ssa",
    "ssi",
    "sshi",
    "ssu",
    "sse",
    "sso",
    "tta",
    "tti",
    "cchi",
    "ttu",
    "ttsu",
    "tte",
    "tto",
    "hha",
    "hhi",
    "ffu",
    "hhu",
    "hhe",
    "hho",
    "mma",
    "mmi",
    "mmu",
    "mme",
    "mmo",
    "yya",
    "yyu",
    "yyo",
    "rra",
    "rri",
    "rru",
    "rre",
    "rro",
    "-"
    ]
    after_n_conv_roma = [
    "nq",
    "nw",
    "nr",
    "nt",
    "np",
    "ns",
    "nd",
    "nf",
    "ng",
    "nh",
    "nj",
    "nk",
    "nl",
    "nz",
    "nx",
    "nc",
    "nv",
    "nb",
    "nm",
    "n-"
    ]
    after_n_conv_result = [
    "q",
    "w",
    "r",
    "t",
    "p",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "m",
    "-"
    ]
}
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "a"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.G.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "g"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.Hyphen.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "-"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.F.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "f"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
browserEvents.Q.onEvent(browserEvents.KeyEvent.Pressed, function () {
    input_roma = "" + input_roma + "q"
    if (after_n_conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + "ん"
        input_roma = input_roma.charAt(1)
    }
    if (conv_roma.indexOf(input_roma) != -1) {
        input_hira = "" + input_hira + conv_hira[conv_roma.indexOf(input_roma)]
        input_roma = ""
    }
    if (problem_hira_list[problem_index] == input_hira) {
        input_roma = ""
        input_hira = ""
        problem_index += 1
        if (problem_index == problem_hira_list.length) {
            game.gameOver(true)
        }
    }
    problem_kanji_ui.setText(problem_kanji_list[problem_index])
    problem_hira_ui.setText(problem_hira_list[problem_index])
    input_ui.setText("" + input_hira + input_roma)
    problem_index_ui.setText("" + (problem_index + 1) + " / " + problem_hira_list.length)
})
let after_n_conv_result: string[] = []
let conv_hira: string[] = []
let conv_roma: string[] = []
let input_hira = ""
let after_n_conv_roma: string[] = []
let input_roma = ""
let problem_index = 0
let problem_index_ui: TextSprite = null
let problem_hira_list: string[] = []
let problem_kanji_list: string[] = []
let input_ui: TextSprite = null
let problem_hira_ui: TextSprite = null
let problem_kanji_ui: TextSprite = null
keymap.setSystemKeys(0, 0, 0, 0)
ローマ字変換表作成()
let gametitle = "The Arcade Typing 3.4"
game.splash(gametitle)
problem_kanji_ui = textsprite.create("")
problem_kanji_ui.setPosition(10, 35)
problem_hira_ui = textsprite.create("")
problem_hira_ui.setPosition(10, 55)
input_ui = textsprite.create("")
input_ui.setPosition(10, 75)
problem_kanji_list = [
"こんにちは",
"おはようございます",
"こんばんは",
"雨が降る",
"雨降って地固まる",
"株式会社",
"有限会社",
"ごきげんよう",
"太平洋側",
"アーケード"
]
problem_hira_list = [
"こんにちは",
"おはようございます",
"こんばんは",
"あめがふる",
"あめふってじかたまる",
"かぶしきがいしゃ",
"ゆうげんがいしゃ",
"ごきげんよう",
"たいへいようがわ",
"あーけーど"
]
problem_kanji_ui.setText(problem_kanji_list[0])
problem_hira_ui.setText(problem_hira_list[0])
problem_index_ui = textsprite.create("" + (problem_index + 1) + " / " + problem_hira_list.length)
problem_index_ui.setPosition(20, 10)
