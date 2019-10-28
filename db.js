let db = [
  {
    "Language": "Fortran",
    "Predecessor": "Assembly language",
    "Lang_Year": 1957,
    "Characteristics": "Strongly typed, compiled",
    "Contribution_of_Language": "first lang w/ optimized compilation",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "IBM",
    "Website": "https://wg5-fortran.org/",
    "Responsibility": "Max"
  },
  {
    "Language": "FLOW-MATIC",
    "Predecessor": "ARITH-MATIC",
    "Lang_Year": 1955,
    "Characteristics": "",
    "Contribution_of_Language": "Shaped developement of COBOL. First English-like data processing language.",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "Remington Rand and Grace Hopper",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "COBOL",
    "Predecessor": "FLOW-MATIC",
    "Lang_Year": 1959,
    "Characteristics": "Primarily for data processing. Emphasizes inputs and outputs. Uses imperitive and procedural programming paradigm.",
    "Contribution_of_Language": "Introduced features later used in LISP. Still used in business mainframes today.",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "COASYL",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "IPL",
    "Predecessor": "Assembly language",
    "Lang_Year": 1956,
    "Characteristics": "Assembly language style. Designed for data processing. Includes functions, data types, recursion.",
    "Contribution_of_Language": "Invented list processing. Preceded LISP.",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "Allen Newell, Cliff Shaw, Herbert A. Simon",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "LISP",
    "Predecessor": "IPL",
    "Lang_Year": 1958,
    "Characteristics": "",
    "Contribution_of_Language": "Parentheses. Functional programming paradigm. Possesses features of lambda calculus.",
    "Comment_on_Language": "Invented tree data structures, dynamic typing, and self hosting compilers.",
    "Company_People_implemented_language": "Steve Russell, Timothy P. Hart, and Mike Levin",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "Scheme",
    "Predecessor": "LISP, Algol",
    "Lang_Year": 1975,
    "Characteristics": "Minimalist branch of LISP. Is lexically scoped, unlike earlier LISPs.",
    "Contribution_of_Language": "",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "Guy L. Steele and Gerald Jay Sussman",
    "Website": "http://www.scheme-reports.org/",
    "Responsibility": "Max"
  },
  {
    "Language": "Common LISP",
    "Predecessor": "LISP, Scheme",
    "Lang_Year": 1984,
    "Characteristics": "Functional, procedural, object oriented. Dynamic programming language",
    "Contribution_of_Language": "",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "PL/1",
    "Predecessor": "COBOL, Fortran, Algol",
    "Lang_Year": 1964,
    "Characteristics": "English-like syntax. Imperative. Sed for data processing.",
    "Contribution_of_Language": "IBM",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "IBM",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "Simula",
    "Predecessor": "",
    "Lang_Year": 1962,
    "Characteristics": "Syntactic superset of Algol. Has garbage collection.",
    "Contribution_of_Language": "Invented object oriented programming.",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "Kristen Nygaard",
    "Website": "http://www.simula67.info/",
    "Responsibility": "Max"
  },
  {
    "Language": "Algol",
    "Predecessor": "",
    "Lang_Year": 1958,
    "Characteristics": "Imperative programming paradigm.",
    "Contribution_of_Language": "Considered first “high level” (not assembly) language. Influenced most subsequent imperative languages.",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "Bauer, Bottenbruch, Rutishauser, Samelson, Backus, Katz, Perlis, Wegstein, Naur, Vauquois, van Wijngaarden, Woodger, Green, McCarthy",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "BCPL",
    "Predecessor": "CPL",
    "Lang_Year": 1967,
    "Characteristics": "Intended for writing compilers. Introduced using curly braces to denote code blocks. Single data type – word.",
    "Contribution_of_Language": "Influenced B and C, C++ etc.",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "B",
    "Predecessor": "BCPL, PL/1",
    "Lang_Year": 1969,
    "Characteristics": "Typeless, which was seen as a disadvantage. Treats word as integer or memory address depending on context. Very similar to successor C.",
    "Contribution_of_Language": "Preceded C",
    "Comment_on_Language": "Still in use in some embedded systems.",
    "Company_People_implemented_language": "Ken Thompson, Dennis Ritchie",
    "Website": "",
    "Responsibility": "Max"
  },
  {
    "Language": "C",
    "Predecessor": "B",
    "Lang_Year": 1972,
    "Characteristics": "General-purpose, Imperative, computer programming language, lexical variable scope and recurison",
    "Contribution_of_Language": "",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "",
    "Website": "",
    "Responsibility": "Tanner"
  },
  {
    "Language": "APL",
    "Predecessor": "",
    "Lang_Year": 1962,
    "Characteristics": "Dynamic typing and memory allocation. Has many symbols.",
    "Contribution_of_Language": "Financial and insurance applications, aritificial intelligence, neural netowrks, robotics, image processing, computer animation, healthcare, etc.",
    "Comment_on_Language": "Had to read and maintain.",
    "Company_People_implemented_language": "Kenneth E. Iverson and other people at IBM",
    "Website": "",
    "Responsibility": "Tanner"
  },
  {
    "Language": "Pascal",
    "Predecessor": "ALGOL",
    "Lang_Year": 1970,
    "Characteristics": "Imperative and procedural programming",
    "Contribution_of_Language": "Easy to read and maintain thanks to simple syntax",
    "Comment_on_Language": "Designed to encourage good programming practices",
    "Company_People_implemented_language": "Niklaus Wirth",
    "Website": "https://www.freepascal.org",
    "Responsibility": "Tanner"
  },
  {
    "Language": "Prolog",
    "Predecessor": "",
    "Lang_Year": 1972,
    "Characteristics": "Logic programming language",
    "Contribution_of_Language": "The first logic programming language",
    "Comment_on_Language": "Popular in early development of AI",
    "Company_People_implemented_language": "Alain Colmerauer",
    "Website": "https://www.swi-prolog.org",
    "Responsibility": "Tanner"
  },
  {
    "Language": "Smalltalk",
    "Predecessor": "Simula",
    "Lang_Year": 1972,
    "Characteristics": "Object oriented and dynamic typing",
    "Contribution_of_Language": "One of the most beloved programming language, designed for educational purposes",
    "Comment_on_Language": "Modern object oriented programming languages are influenced by Smalltalk",
    "Company_People_implemented_language": "Alan K and his team",
    "Website": "",
    "Responsibility": "Tanner"
  },
  {
    "Language": "Logo",
    "Predecessor": "Lisp",
    "Lang_Year": 1967,
    "Characteristics": "Influenced by smalltalk",
    "Contribution_of_Language": "Influenced smalltalk programming language",
    "Comment_on_Language": "Well known for turtle graphics",
    "Company_People_implemented_language": "Wally Feurzeig, Seymour Papert, BBN",
    "Website": "",
    "Responsibility": "Tanner"
  },
  {
    "Language": "PL/M",
    "Predecessor": "PL/I, ALGOL, XPL",
    "Lang_Year": 1973,
    "Characteristics": "Has no standards, targeted at microprocessors programming",
    "Contribution_of_Language": "Intel operating system",
    "Comment_on_Language": "Language allows direct access to any location on memory, ports and processor interrupt flags in a very efficient way",
    "Company_People_implemented_language": "Gary Kildall, Intel",
    "Website": "",
    "Responsibility": "Tanner"
  },
  {
    "Language": "RPG",
    "Predecessor": "",
    "Lang_Year": 1959,
    "Characteristics": "High-level programming language for business application",
    "Contribution_of_Language": "Popular used by IBM operating system development",
    "Comment_on_Language": "Only used at IBM and IBM systems",
    "Company_People_implemented_language": "IBM",
    "Website": "",
    "Responsibility": "Tanner"
  },
  {
    "Language": "Modula",
    "Predecessor": "Algol, Pascal",
    "Lang_Year": 1975,
    "Characteristics": "Imperative, procedural, modular",
    "Contribution_of_Language": "Primary acomplishment of Modula is the introduction to the a module system, which groups sets of related declarations into program units. Influenced Go.",
    "Comment_on_Language": "Named Modula after its use of modules.",
    "Company_People_implemented_language": "Niklaus Wirth",
    "Website": "http://www.modula3.org/",
    "Responsibility": "Stone"
  },
  {
    "Language": "APL",
    "Predecessor": "N/A",
    "Lang_Year": 1966,
    "Characteristics": "Functional, structured, modular, array.",
    "Contribution_of_Language": "Allows for manipulation of multidimensional arrays using mathematical functions and operations. Influenced Matlab",
    "Comment_on_Language": "Poor readability",
    "Company_People_implemented_language": "Larry Breed, Dick Lathwell, Roger Moore",
    "Website": "N/A",
    "Responsibility": "Stone"
  },
  {
    "Language": "Snobol",
    "Predecessor": "N/A",
    "Lang_Year": 1962,
    "Characteristics": "Imperative, unstructured",
    "Contribution_of_Language": "Used for text-based manipulation",
    "Comment_on_Language": "String is the only data type. Quickly replaced",
    "Company_People_implemented_language": "David J. Farber, Ralph E. Griswold, Ivan P. Polonsky, and Bell Labs",
    "Website": "http://www.snobol4.org/",
    "Responsibility": "Stone"
  },
  {
    "Language": "Icon",
    "Predecessor": "Snobol, C, CLU",
    "Lang_Year": 1977,
    "Characteristics": "text-oriented, structured",
    "Contribution_of_Language": "Intoduced goal-directed execution. Used for managing and manipulating strings and textual patterns",
    "Comment_on_Language": "Very high level programming language",
    "Company_People_implemented_language": "Ralph Griswold",
    "Website": "https://www.cs.arizona.edu/icon/",
    "Responsibility": "Stone"
  },
  {
    "Language": "Forth",
    "Predecessor": "Lisp, APL",
    "Lang_Year": "1970-Present",
    "Characteristics": "procedural, stack-orientive, reflective, concatinative with no type checking",
    "Contribution_of_Language": "Used in calculators, and as a microcontroller, has also seen use in astronomy and space exploration",
    "Comment_on_Language": "effective in allowing the creation of concise, well tested code quickly",
    "Company_People_implemented_language": "Charles H. Moore",
    "Website": "https://www.forth.com/forth/",
    "Responsibility": "Trent"
  },
  {
    "Language": "Basic",
    "Predecessor": "FORTRAN, JOSS",
    "Lang_Year": "1964-1989",
    "Characteristics": "non-structured, high level, eventually procedural and object oriented,",
    "Contribution_of_Language": "Opened up the computer market to a broader userbase, and became a good learning language",
    "Comment_on_Language": "a good learning tool for beginning programmers, not as relevant though",
    "Company_People_implemented_language": "John G. Kemeny and Thomas E. Kurtz",
    "Website": "https://www.dartmouth.edu/basicfifty/basic.html",
    "Responsibility": "Trent"
  },
  {
    "Language": "ML",
    "Predecessor": "Lisp",
    "Lang_Year": "1973-Present",
    "Characteristics": "functional, imperitive, static-typing, general purpose",
    "Contribution_of_Language": "Helped influence C++ and used in scientific applications, compilers, education, and a large variety of applications",
    "Comment_on_Language": "has lots of applications, and helped advance modern computer languages",
    "Company_People_implemented_language": "Robin Milner and associates from University of Edinburgh",
    "Website": "http://www.soc.napier.ac.uk/course-notes/sml/manual.html",
    "Responsibility": "Trent"
  },
  {
    "Language": "sh",
    "Predecessor": "Several Unix Shells",
    "Lang_Year": "1977-Present",
    "Characteristics": "typeless variables, synchronous and asyncrhonous commands",
    "Contribution_of_Language": "Was an early effective command line interpreter for Unix",
    "Comment_on_Language": "became the default shell for Unix 7",
    "Company_People_implemented_language": "Stephen Bourne",
    "Website": "https://www.computerhope.com/unix/ush.htm",
    "Responsibility": "Trent"
  },
  {
    "Language": "csh",
    "Predecessor": "sh",
    "Lang_Year": "1978-Present",
    "Characteristics": "interactive, readable command processor",
    "Contribution_of_Language": "Included many innovative features that have since shaped Unix shells, like aliases, interactive filename completion, and many others",
    "Comment_on_Language": "easier to use and more readable than previous shells",
    "Company_People_implemented_language": "Bill Joy",
    "Website": "https://www.mkssoftware.com/docs/man1/csh.1.asp",
    "Responsibility": "Trent"
  },
  {
    "Language": "Postscript",
    "Predecessor": "Lisp",
    "Lang_Year": "1984-2007",
    "Characteristics": "imperitive, procedural, high-level, concatinative, dynamic typing",
    "Contribution_of_Language": "Used for printer control, document layout, and electronic publishing",
    "Comment_on_Language": "lead to the establishment of PDF",
    "Company_People_implemented_language": "Adobe",
    "Website": "https://www.adobe.com/content/dam/acom/en/devnet/actionscript/articles/PLRM.pdf",
    "Responsibility": "Trent"
  },
  {
    "Language": "SML",
    "Predecessor": "ML",
    "Lang_Year": "1983-Present",
    "Characteristics": "imperitive, modular, functional, type inference, multi-paradigm",
    "Contribution_of_Language": "Effective for writting compilers, researching programing languages, and proving theorems.",
    "Comment_on_Language": "influenced python, is a more formal specification of ML",
    "Company_People_implemented_language": "Bell Labs and Princton, Moscow ML, and a few others",
    "Website": "http://smlnj.org/sml97.html",
    "Responsibility": "Trent"
  },
  {
    "Language": "ADA",
    "Predecessor": "Pascal, Algol, and Modula",
    "Lang_Year": "1980-Present",
    "Characteristics": "structured, static typing, imperitive, object-oriented, multi-paradigm, high-level",
    "Contribution_of_Language": "Used in sattleites, aircraft, medical equipment, transport systems, and many other large and important industries",
    "Comment_on_Language": "influenced many modern programming languages",
    "Company_People_implemented_language": "Jean Ichbiah",
    "Website": "http://www.ada2012.org/",
    "Responsibility": "Trent"
  },
  {
    "Language": "C++",
    "Predecessor": "C, Ada, Simula",
    "Lang_Year": "1985-Present",
    "Characteristics": "general purpose, imperitive, obejct oriented and generic features, still allows for low-level memory manipulation",
    "Contribution_of_Language": "Established a highly portable powerful language that has been used for an wide variety of applications",
    "Comment_on_Language": "built well off of C allowing for more effective use while remaining similar enough to be easy to learn",
    "Company_People_implemented_language": "Bjarne Stroustrup",
    "Website": "http://www.cplusplus.com/",
    "Responsibility": "Trent"
  },
  {
    "Language": "AWK",
    "Predecessor": "Snobol, sh, C",
    "Lang_Year": "1978-1988",
    "Characteristics": "imperitive, data-driven, procedural",
    "Contribution_of_Language": "Effective at text processing and extracting data",
    "Comment_on_Language": "no specific typing, can handle pretty much all data types as well as regular expressions",
    "Company_People_implemented_language": "Alfred Aho, Peter Weinberger, Brian Kernighan",
    "Website": "http://awklang.org/",
    "Responsibility": "Trent"
  },
  {
    "Language": "Objective-C",
    "Predecessor": "C, Smalltalk",
    "Lang_Year": "1984-Present",
    "Characteristics": "object oriented, general-purpose, high-level, reflexive",
    "Contribution_of_Language": "Used as the main language for the NeXTSTEP OS which macOS and IOS are diverative of",
    "Comment_on_Language": "works with valid C code, and has grown in popularity along with Apple",
    "Company_People_implemented_language": "Tom Love, Brad Cox",
    "Website": "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
    "Responsibility": "Trent"
  },
  {
    "Language": "Haskell",
    "Predecessor": "ML, Lisp, Scheme",
    "Lang_Year": "1990-Present",
    "Characteristics": "modular, multi-paradigm, general-purpose, strong static typing",
    "Contribution_of_Language": "Used for logic derivation and evaluation",
    "Comment_on_Language": "utilized by facebook for their anti-spam software",
    "Company_People_implemented_language": "Lennart Augustsson, Paul Hudak, John Hughes, Mark Jones, and many others",
    "Website": "https://www.haskell.org/",
    "Responsibility": "Trent"
  },
  {
    "Language": "Eiffel",
    "Predecessor": "Ada, Simula, Z",
    "Lang_Year": 1986,
    "Characteristics": "Object-oriented, class-based, concurrent",
    "Contribution_of_Language": "Improves the reliablity of commercial software development. Introduced design by contract and command-query seperation.",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "Bertrand Meyer, Eiffel Software",
    "Website": "www.eiffel.org/",
    "Responsibility": "Stone"
  },
  {
    "Language": "Java",
    "Predecessor": "Ada 83, Mesa, Object Pascal, C#, C++, Oberon, Objective-C, UCSD, Pascal, Eiffel, Modula-3",
    "Lang_Year": "1995-Present",
    "Characteristics": "Object-oriented, class-based, imperative, generic, reflective, concurrent, portable.",
    "Contribution_of_Language": "Code can be run on any machine that supports the Java Virutual Machine (Plateform independence). Popular for client-server web applications",
    "Comment_on_Language": "The portability of Java has made it one of the most popular languages in the world.",
    "Company_People_implemented_language": "James Gosling, Sun Microsystems",
    "Website": "www.oracle.com/java/",
    "Responsibility": "Stone"
  },
  {
    "Language": "Python",
    "Predecessor": "Haskell, CLU, ABC, ALGOL 68, APL, C, C++, Dylan, Icon, Java, Lisp, Perl, Standard ML",
    "Lang_Year": "1990-Present",
    "Characteristics": "Funtional, imperative, object-oriented, reflective",
    "Contribution_of_Language": "Improves code readablity by using with space to seperate statements, extremely versitile and can be used in response to many programming tasks",
    "Comment_on_Language": "Pythons readability and writability has made it one of the most popular languages in the world. Used heavily in machine learning and artifical intellegence",
    "Company_People_implemented_language": "Guido Von Rossum",
    "Website": "www.python.org/",
    "Responsibility": "Stone"
  },
  {
    "Language": "Tcl",
    "Predecessor": "AWK, Lisp",
    "Lang_Year": "1988 - Present",
    "Characteristics": "Object-oriented, functional, procedural, imperative, event-driven",
    "Contribution_of_Language": "Designed to be simple and extremely valuable. Tcl casts everything into the form of a command",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "John Ousterhout, Tcl Core Team",
    "Website": "www.tcl.tk",
    "Responsibility": "Stone"
  },
  {
    "Language": "Perl",
    "Predecessor": "AWK, BASIC, C, C++, Lisp",
    "Lang_Year": "1987-Present",
    "Characteristics": "Functional, imperative, object-oriented, multi-paradigm, scripting language, felxible language",
    "Contribution_of_Language": "Makes report processing simpiler, used for system administration, graphics processing, and finance",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "Larry Wall",
    "Website": "www.perl.org",
    "Responsibility": "Stone"
  },
  {
    "Language": "Bash",
    "Predecessor": "sh, csh, ksh",
    "Lang_Year": "1989-Present",
    "Characteristics": "Unix shell, command language",
    "Contribution_of_Language": "Was created as a free replacement to the Bourne shell. It is widely used as the default shell language in Linux and MacOS",
    "Comment_on_Language": "Some debate if Bash should be considered a programming language.",
    "Company_People_implemented_language": "Brian Fox",
    "Website": "www.gnu.org/software/bash/",
    "Responsibility": "Stone"
  },
  {
    "Language": "Ksh",
    "Predecessor": "sh",
    "Lang_Year": "1983-2013",
    "Characteristics": "Unix shell, shell scripting language",
    "Contribution_of_Language": "Introduced new features that paved way for future scripting languages. Development was based heavliy on the Bourne shell.",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "David Korn, Bell Labs",
    "Website": "http://www.kornshell.com",
    "Responsibility": "Stone"
  },
  {
    "Language": "Caml",
    "Predecessor": "ML",
    "Lang_Year": 1985,
    "Characteristics": "Functional, Imperative, General purpose",
    "Contribution_of_Language": "It is used in Mircosoft SharePoint Foundation. Was created to be expressive, yet easy to learn and use",
    "Comment_on_Language": "Statically typed, strictly evaluated, automatic memory managment",
    "Company_People_implemented_language": "Gerard Huet, Guy Cousineau, Ascander Suarez, Pierce Weis, Michel Mauny, Xavier Leroy",
    "Website": "http://caml.inria.fr/",
    "Responsibility": "Stone"
  },
  {
    "Language": "Visual Basic",
    "Predecessor": "Basic",
    "Lang_Year": 1991,
    "Characteristics": "Object-based, event-driven, IDE",
    "Contribution_of_Language": "Made for its Component Object Model. Contributed to Rapid Appication Development of GUIs, database access, and creation of ActiveX controls",
    "Comment_on_Language": "Easy learning curve. Even though support for the language was dropped in 2008 it remains popular for beginning programmers",
    "Company_People_implemented_language": "Mircosoft, Alan Cooper",
    "Website": "https://docs.microsoft.com/en-us/dotnet/visual-basic/programming-guide/",
    "Responsibility": "Stone"
  },
  {
    "Language": "C#",
    "Predecessor": ".NET, Java, C++",
    "Lang_Year": 2000,
    "Characteristics": "Structered, generic, imperative, object-oriented, event-driven, task-driven, functional, concurrent, reflective",
    "Contribution_of_Language": "Used in large variety of ways, open sourced, designed for Common Language Infastructure",
    "Comment_on_Language": "Catches lexical and syntax errors before compilation",
    "Company_People_implemented_language": "Microsoft",
    "Website": "https://docs.microsoft.com/en-us/dotnet/csharp/",
    "Responsibility": "Stone"
  },
  {
    "Language": "JavaScript",
    "Predecessor": "Java, Self",
    "Lang_Year": 1995,
    "Characteristics": "Object-oriented, Functional, event-driven, imperative, interpreted",
    "Contribution_of_Language": "Used in many websites to change content and visualization, also adds logic to web pages.",
    "Comment_on_Language": "Designed for Common Language Infiastructure",
    "Company_People_implemented_language": "Brendan Eich, Mozilla Foundation, Netscape Communications Corporation",
    "Website": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "Responsibility": "Stone"
  },
  {
    "Language": "Ruby",
    "Predecessor": "Eiffel, Smalltalk",
    "Lang_Year": 1995,
    "Characteristics": "Object-oriented, automatic, imperative, functional, reflective,",
    "Contribution_of_Language": "Blend of creator's favorite languages. Offers balance between functional programming and imperative programming. Empahsizes human needs, rather than computer needs.",
    "Comment_on_Language": "Designer couldn't find a language he liked so he created Ruby",
    "Company_People_implemented_language": "Yukihiro Matsumoto",
    "Website": "www.ruby-lang.org",
    "Responsibility": "Stone"
  },
  {
    "Language": "Swift",
    "Predecessor": "C#, Python, Ruby, Objective-C, Rust, Haskell, CLU",
    "Lang_Year": "2014-Present",
    "Characteristics": "General-purpose, complied programming language, catches as many lexical and semantic errors, widespread late binding, dynamic dispatch",
    "Contribution_of_Language": "upports development of iOS, mac OS, watchOS, tvOS, Cocoa, and Linux",
    "Comment_on_Language": "",
    "Company_People_implemented_language": "Chris Lattner, Doug Gregor, John McCall, Apple Inc.",
    "Website": "http://swift.org/",
    "Responsibility": "Stone"
  }
]