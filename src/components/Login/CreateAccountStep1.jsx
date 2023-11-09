import Logo from '../../assets/100x.svg'


export default function CreateAccountStep1() {
    return (
        <>
            <div className="bg-neutral-1000">
                <main className="flex flex-col px-[0.9375rem] pb-5 items-start gap-3  w-screen h-screen">
                    <header className="flex py-3 items-center self-stretch gap-5">
                        <img src="../../public/images/close.svg" className="w-6 h-6" />
                        <h4 className="font-inter text-md font-bold text-neutral-50">Step 1 of 4</h4>
                    </header>
                    <div className="flex flex-col gap-5 self-stretch">
                        <h2 className="font-inter text-2xl font-bold text-neutral-50 self-stretch">Create your account</h2>
                        <div className="relative flex py-4 px-3 items-center justify-between gap-2.5 rounded border border-twitter—blue self-stretch">
                            <label htmlFor="inputText" className="text-neutral-500 absolute bg-neutral-1000 px-1 left-4 -top-3">Name</label>
                            <input type="text" placeholder="Name" name="inputText" defaultValue="Damodar" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal" />
                        </div>
                        <div className="relative flex py-4 px-3 items-center justify-between gap-2.5 rounded border border-neutral-500 self-stretch">
                            <label htmlFor="inputText" className="text-neutral-500 absolute bg-neutral-1000 px-1 left-4 -top-3">Email</label>
                            <input type="text" placeholder="Email" name="inputText" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-md font-bold text-neutral-50">Date of birth</h2>
                            <h3 className="text-[0.874rem] font-normal text-neutral-500">This will not be shown publicly. Confirm your
                                own age, even if this account is for a business, a pet, or something else.</h3>
                        </div>
                    </div>
                    <div className="flex gap-3 self-stretch">
                        <div className="relative flex py-4 px-3 grow items-center justify-between gap-2.5 rounded border border-neutral-500 self-stretch">
                            <label htmlFor="inputText" className="text-neutral-500 absolute bg-neutral-1000 px-1 left-4 -top-3">Month</label>
                            <select type="text" placeholder="Email" name="inputText" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal">
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                        </div>
                        <div className="relative flex py-4 px-3 items-center justify-between gap-2.5 rounded border border-neutral-500 self-stretch">
                            <label htmlFor="inputText" className="text-neutral-500 absolute bg-neutral-1000 px-1 left-4 -top-3">Day</label>
                            <select type="text" placeholder="Email" name="inputText" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                        </div>
                        <div className="relative flex py-4 px-3 items-center justify-between gap-2.5 rounded border border-neutral-500 self-stretch">
                            <label htmlFor="inputText" className="text-neutral-500 absolute bg-neutral-1000 px-1 left-4 -top-3">Year</label>
                            <select type="text" placeholder="Email" name="inputText" className="bg-black text-neutral-50 placeholder:text-neutral-500 focus:outline-none w-full font-inter text-lg font-normal">
                                <option>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1992</option>
                                <option>1991</option>
                                <option>1990</option>
                                <option>1989</option>
                                <option>1988</option>
                                <option>1987</option>
                                <option>1986</option>
                                <option>1985</option>
                                <option>1984</option>
                                <option>1983</option>
                                <option>1982</option>
                                <option>1981</option>
                                <option>1980</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col px-5 pt-20 justify-end items-center gap-2.5 flex-[1_1_0] self-stretch">
                        <a href="./create-account-step-2.html" className="flex self-stretch">
                            <button className="py-3 px-6 bg-neutral-50 flex grow justify-center items-center self-stretch shadow-button backdrop-blur-button rounded-create gap-2.5
          hover:bg-neutral-200 disabled:bg-neutral-500">
                                <span className="font-inter text-base font-bold text-neutral-1000"> create account </span>
                            </button>
                        </a>
                    </div>
                </main>

            </div>
        </>
    );
}