def on_i_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "i":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.I.on_event(browserEvents.KeyEvent.PRESSED, on_i_key_pressed)

def on_t_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "t":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.T.on_event(browserEvents.KeyEvent.PRESSED, on_t_key_pressed)

def on_e_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "e":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.E.on_event(browserEvents.KeyEvent.PRESSED, on_e_key_pressed)

def on_u_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "u":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.U.on_event(browserEvents.KeyEvent.PRESSED, on_u_key_pressed)

def on_r_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "r":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.R.on_event(browserEvents.KeyEvent.PRESSED, on_r_key_pressed)

def on_z_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "z":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.Z.on_event(browserEvents.KeyEvent.PRESSED, on_z_key_pressed)

def on_w_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "w":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.W.on_event(browserEvents.KeyEvent.PRESSED, on_w_key_pressed)

def on_j_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "j":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.J.on_event(browserEvents.KeyEvent.PRESSED, on_j_key_pressed)

def on_m_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "m":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.M.on_event(browserEvents.KeyEvent.PRESSED, on_m_key_pressed)

def on_v_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "v":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.V.on_event(browserEvents.KeyEvent.PRESSED, on_v_key_pressed)

def on_y_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "y":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.Y.on_event(browserEvents.KeyEvent.PRESSED, on_y_key_pressed)

def on_d_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "d":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.D.on_event(browserEvents.KeyEvent.PRESSED, on_d_key_pressed)

def on_x_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "x":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.X.on_event(browserEvents.KeyEvent.PRESSED, on_x_key_pressed)

def on_s_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "s":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.S.on_event(browserEvents.KeyEvent.PRESSED, on_s_key_pressed)

def on_c_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "c":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.C.on_event(browserEvents.KeyEvent.PRESSED, on_c_key_pressed)

def on_n_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "n":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.N.on_event(browserEvents.KeyEvent.PRESSED, on_n_key_pressed)

def on_o_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "o":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.O.on_event(browserEvents.KeyEvent.PRESSED, on_o_key_pressed)

def on_k_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "k":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.K.on_event(browserEvents.KeyEvent.PRESSED, on_k_key_pressed)

def on_h_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "h":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.H.on_event(browserEvents.KeyEvent.PRESSED, on_h_key_pressed)

def on_b_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "b":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.B.on_event(browserEvents.KeyEvent.PRESSED, on_b_key_pressed)

def on_l_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "l":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.L.on_event(browserEvents.KeyEvent.PRESSED, on_l_key_pressed)

def on_a_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "a":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.A.on_event(browserEvents.KeyEvent.PRESSED, on_a_key_pressed)

def on_g_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "g":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.G.on_event(browserEvents.KeyEvent.PRESSED, on_g_key_pressed)

def on_f_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "f":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.F.on_event(browserEvents.KeyEvent.PRESSED, on_f_key_pressed)

def on_q_key_pressed():
    global j, i
    if problem_list[i].char_at(j) == "q":
        j += 1
        input2.set_text(problem_list[i].substr(0, j))
        if j == len(problem_list[i]):
            j = 0
            i += 1
            problem_ja.set_text(problem_ja_list[i])
            problem.set_text(problem_list[i])
            input2.set_text("")
            if i == len(problem_list):
                game.game_over(True)
browserEvents.Q.on_event(browserEvents.KeyEvent.PRESSED, on_q_key_pressed)

i = 0
j = 0
problem_list: List[str] = []
problem_ja_list: List[str] = []
input2: TextSprite = None
problem: TextSprite = None
problem_ja: TextSprite = None
gametitle = "Arcade Typing 2.0"
game.splash(gametitle)
MakeyMakey.set_simulator_keymap(MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK)
problem_ja = textsprite.create("")
problem_ja.set_position(10, 35)
problem = textsprite.create("")
problem.set_position(10, 55)
input2 = textsprite.create("")
input2.set_position(10, 75)
problem_ja_list = ["こんにちは",
    "おはようございます",
    "こんばんは",
    "あめがふる",
    "かえるのこはあばれる",
    "かぶしきがいしゃ",
    "ゆうげんがいしゃ",
    "All rights reserved",
    "ちいさなとりが",
    "あばれているよ"]
problem_list = ["konnnichiha",
    "ohayougozaimasu",
    "konbanha",
    "amegafuru",
    "kaerunokohaabareru",
    "kabushikigaisya",
    "yuugengaisya",
    "allrightsreserved",
    "chiisanatoriga",
    "abareteiruyo"]
problem_ja.set_text(problem_ja_list[0])
problem.set_text(problem_list[0])
j = 0
i = 0