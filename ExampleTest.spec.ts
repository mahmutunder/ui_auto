import BaseTest from './BaseTest';
import { test, expect } from '@playwright/test';

test("hello",async ({page}) => {
    
    const bt=new BaseTest();

    await  bt.setup();
   await bt.navigateTo("https://demoblaze.com/");

   
  // await bt.clickElement("#login2");
  await bt.logIn();

   await bt.teardown();
})