---
# try also 'default' to start simple
theme: geist

highlighter: shiki
lineNumbers: false

layout: cover

info: |
  ## iOS
---

# App Development with Swift & SwiftUI

Part I

Open slides here: https://ios.np-overflow.club/part-1/

---

# Login to the iMac

**User:** student

**Password:** student


---

# Overview

- 💻 [**macOS** - Welcome to the Mac!](4)
- 👋 [**Hello World** - Launch Xcode, create a project and run it!](8)
- 📐 [**Layout** - Use stacks to layout the app](14)
- 🌄 [**Images and assets** - Add an image, ideally of Qin Guan](19)
- 🛠 [**Modifiers** - Customise Views using modifiers](24)
- 👀 [**State** - Set the views and modify the state](37)

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: image-right
image: /assets/demo.gif
---
# Demo

It's a clicker, with ✨style✨, and Qin Guan

---
layout: cover
---
# 🖥 Welcome to macOS
## A better operating system
--- 

# Keyboard Shortcuts

* For most keyboard shortcuts you’re used to, think of Command (⌘) as your Control key.
* ⇧ represents the Shift key.

## Important shortcuts

- <kbd>⌘Space</kbd> opens up spotlight search 
  - A fancy search bar where you can open anything.
  - Similar to your Start menu on Windows.
- <kbd>⌘C</kbd> and <kbd>⌘V</kbd> is copy and paste respectively
- <kbd>⌘Z</kbd> and <kbd>⌘⇧Z</kbd> is undo and redo respectively

---
layout: center
---
![The best way to build an app is with Swift and SwiftUI](/assets/wwdc.png)
— Apple, Platforms State of the Union, WWDC, June 2022

---

# SwiftUI
- Apple’s new app development framework for building modern user interfaces
  - Build and prototype full-fledged iOS apps in Swift
  - Allows building for iPadOS, macOS, watchOS, tvOS
- Modern, *declarative* syntax for building user interfaces
  - Allows developers to “just say what your interface should do”
  - Gentler learning curve than UIKit, the previous framework
  - Easy to add animations and interactivity
  - Great for prototyping and beginners

---
layout: cover
---
# 👋 Hello World!
## Create a SwiftUI project and run it!
--- 

# Open up Xcode
- Type <kbd>⌘Space</kbd> and search for Xcode and click on the result
![](/assets/welcometoxcode.png)

---

# Create a project
- Select **Create a new Xcode project**
- Select **iOS**, then **App** and press **Next**
![](/assets/projecttemplate.png)

---
layout: image-right
image: /assets/projectsetup.png
---

# Project Setup

- For Product Name, type in **Counter**.
- For Team, select **None**.
- For Organization Identifier, type in **club.np-overflow**.
  - The convention is the reverse of your domain name.
- For Interface, select **SwiftUI**.
- For Language, select **Swift**.
- Make sure **Use Core Data** and **Include Tests** are unchecked.
- Click Next and save the project on the Desktop.

--- 

# Run the project
- Click the ▶ icon in the menubar to run the app!

![](/assets/xcodelaunch.png)

---
layout: image-left
image: /assets/simulatorhelloworld.png
---

# Simulator
- An iPhone (or iPod) Simulator will appear
- Hey look, it says "Hello, World!"
- You created your first SwiftUI app!

---
layout: cover
---
# 📐 Layout
## Make use of stacks to create custom layouts

--- 

# Understanding the code
```swift {all|10-15|12-13}
//
//  ContentView.swift
//  Counter
//
//  Created by Jia Chen Yee on 25/7/22.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, World")
            .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
```

---

# Text

- Display a static, uneditable Text on screen.

```swift
Text("Hello!")
```

---
layout: image-right
image: /assets/vstack.png
---
# VStack

- Vertical Stack Views
- Views within its curly braces will be arranged vertically

```swift
VStack {
    Text("Apple")
    Text("Banana")
    Text("Strawberry")
}
```

---
layout: image-right
image: /assets/hstack.png
---
# HStack

- Horizontal Stack Views
- Views within its curly braces will be arranged horizontally

```swift
HStack {
    Text("Apple")
    Text("Banana")
    Text("Strawberry")
}
```

---
layout: cover
---
# 🌄 Images & Assets
## Add images into the app

---

# Get an image
- Open up *Safari* and search for an image.
- Maybe something like a "cat", "dog" or "potato"!
- Right-click on an image and select **Save Image to "Downloads"**.

<img src="/assets/saveimage.png" width=500>

---

# Add the image to your project
- From the sidebar, click on **Assets**
- Drag your image from the **Downloads** at in your dock into the **Assets**
- Click on the image name, press Return (or Enter) and rename it to `MyImage`
- It should look like the image below.

![](/assets/addassets.png)

---

# Add the image to SwiftUI
- Use the `Image` along with the image's name.
- Make sure to place everything in a `VStack`

```swift{all|3-7}
struct ContentView: View {
    var body: some View {
        VStack {
            Image("MyImage")
            Text("Hello, world!")
                .padding()
        }
    }
}
```

---
layout: cover
---
# 💤 Break
## 15 minute break!

---
layout: cover
---
# 🛠 Modifiers & Customisation
## Modify how views look!

--- 

# How they work
- Think of this as if you are tacking on styles on a View.
- They allow you to add background colours, change fonts, just customise your view in general.

--- 

# Image Customisation
- The `Image` you created works fine, but it's just huge.
- You can add the `.resizable()` modifier on the image to allow the image to be resized.
- You can add the `.scaledToFit()` modifier to allow the image to retain its aspect ratio as it scales.

```swift{5-6}
struct ContentView: View {
    var body: some View {
        VStack {
            Image("MyImage")
                .resizable()
                .scaledToFit()
            Text("Hello, world!")
                .padding()
        }
    }
}
```

--- 

# Foreground Colour
```swift{2}
Text("Hello, World")
    .foregroundColor(.red)
```

- Changes the colour of a `Text` to `red`
- Type `.` and use the code completion to find other colours you can use
  - the `.` is just shorthand for `Color.red`. 

---

# Background Colour
```swift{3}
Text("Hello, World")
    .foregroundColor(.red)
    .background(Color.green)
```

- To add a background on a View, use the `.background()` modifier
- Like the `.foregroundColor` modifier, typing a `.` allows you to pick a `Color` from code completion.
- It adds a background around the view itself. Think of this as simply highlighting a View.

---

# Padding
```swift{4}
Text("Hello, World")
    .foregroundColor(.red)
    .background(Color.green)
    .padding()
```

- Add some space around a View using the `.padding` modifier
- `.padding` can be used along with `.background` to add "space" between the background and the `View` itself.
- Within the brackets, you can type in a number and adjust how large the padding is. For example, `.padding(32)`.

---

# Font
```swift{2}
Text("Hello, World")
    .font(.system(size: 32, weight: .bold))
    .foregroundColor(.red)
    .background(Color.green)
    .padding()
```

- Set a custom font size and weight for your Text and, interestingly, Images with SF Symbols.
- Replace the value of the `size:` and `weight:` parameter with any value you want
- To customise the font weights, type `.` to see the various options and pick from the code completion.

--- 

# Corner Radius
```swift{4}
Image("MyImage")
    .resizable()
    .scaledToFit()
    .cornerRadius(8)
```

- Add rounded corners on any View.
- This can make your `.background` look less square.
- In iOS, you might see that rounded rectangles are widely used in the user interface.

---

# Real Background Colour
```swift{all|3-4,8}
struct ContentView: View {
    var body: some View {
        ZStack {
            Color.blue
            VStack {
                // ...
            }
        }
    }
}
```

- Use a `ZStack` to stack elements on top of one another
- Add a `Color` View behind the `VStack`

--- 

# Linear Gradients
```swift{4-6}
struct ContentView: View {
    var body: some View {
        ZStack {
            LinearGradient(colors: [.red, .yellow],
                           startPoint: .topTrailing,
                           endPoint: .bottomTrailing)
            VStack {
                // ...
            }
        }
    }
}
```

- Replace the `Color` with a `LinearGradient`.
- Within the `colors:` parameter array, feel free to add any colours you want.
- The `startPoint` and `endPoint` can be any direction (see next slide).

---

| Value            | Direction    |
|------------------|--------------|
|`.top`            | Top          |
|`.topLeading`     | Top Left     |
|`.topTrailing`    | Top Right    |
|`.leading`        | Left         |
|`.bottomTrailing` | Bottom Right |
|`.bottom`         | Bottom       |
|`.bottomLeading`  | Bottom Left  |
|`.trailing`       | Right        |

--- 

# Radial Gradients
```swift{4-7}
struct ContentView: View {
    var body: some View {
        ZStack {
            RadialGradient(colors: [.red, .yellow],
                           center: .center,
                           startRadius: 0,
                           endRadius: 270)
            VStack {
                // ...
            }
        }
    }
}
```

---

# Spacer
```swift
Spacer()
```

- Takes up as much space as possible! Like me!
- For instance, if you have a `VStack` with a `Spacer` in it between 2 elements, the two elements will be spaced apart
- That's really it.

---
layout: cover
---

# 👀 State
## Respond to clicks

--- 

# State variables

- Variables that *reloads* the entire view when they are changed
- If the variable's value is changed, any views relying on it get automatically reloaded to display new content.

---

# Create a @State variable
```swift{5}
import SwiftUI

struct ContentView: View {
    
    @State var counter = 0
    
    var body: some View {
        ZStack {
            RadialGradient(colors: [.red, .yellow],
                           center: .center,
```

---

# Buttons
- Buttons can come in all shapes and sizes
- You can turn any `View` into a `Button`

```swift
Button {
    // What happens when the button is clicked
} label: {
    // How the button looks
}
```

---

# Change the image to a Button
```swift{2-9}
VStack {
    Button {
        
    } label: {
        Image("MyImage")
            .resizable()
            .scaledToFit()
            .cornerRadius(8)
    }
    Text("Hello, world!")
        .font(.system(size: 32, weight: .bold))
        .foregroundColor(.red)
        .background(Color.green)
        .padding()
}
```

---

# Updating the counter
- When the `Button` is clicked, increment the `counter` by 1

```swift{3}
VStack {
    Button {
        counter += 1
    } label: {
        Image("MyImage")
            .resizable()
            .scaledToFit()
            .cornerRadius(8)
    }
    Text("Hello, world!")
        .font(.system(size: 32, weight: .bold))
        .foregroundColor(.red)
        .background(Color.green)
        .padding()
}
```

---

# Display the value!

- Use String interpolation to display the counter's value in the `Text`.
  - In Swift, you can use `"\(variable name)"` to embed a variable in the middle of a `String`.

```swift{10}
VStack {
    Button {
        counter += 1
    } label: {
        Image("MyImage")
            .resizable()
            .scaledToFit()
            .cornerRadius(8)
    }
    Text("\(counter) Qin Guans clicked")
        .font(.system(size: 32, weight: .bold))
        .foregroundColor(.red)
        .background(Color.green)
        .padding()
}
```

---

# Try it out!
- Run your code and try it out!
- The `Button` should work and, with every click, your `Text` should automatically update.

---
layout: cover
---

# 🎨 Customise it!
## Best/most ridiculous will get a Microsoft Water Bottle
because funny

---
layout: cover
---

# Thank you

See you in **part two** next week!

[Click here for attendance form](https://forms.office.com/Pages/ResponsePage.aspx?id=FeGpyxYwYkShq6Vly6DN8daI3b2lEehAoaSkaxb7XzZUOENMWUpMUVZWR09aRTQwTU5ZUVg4U0ZEUCQlQCN0PWcu)
