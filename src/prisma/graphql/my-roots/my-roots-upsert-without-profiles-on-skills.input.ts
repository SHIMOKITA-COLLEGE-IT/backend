import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsUpdateWithoutProfilesOnSkillsInput } from './my-roots-update-without-profiles-on-skills.input';
import { Type } from 'class-transformer';
import { MyRootsCreateWithoutProfilesOnSkillsInput } from './my-roots-create-without-profiles-on-skills.input';

@InputType()
export class MyRootsUpsertWithoutProfilesOnSkillsInput {

    @Field(() => MyRootsUpdateWithoutProfilesOnSkillsInput, {nullable:false})
    @Type(() => MyRootsUpdateWithoutProfilesOnSkillsInput)
    update!: MyRootsUpdateWithoutProfilesOnSkillsInput;

    @Field(() => MyRootsCreateWithoutProfilesOnSkillsInput, {nullable:false})
    @Type(() => MyRootsCreateWithoutProfilesOnSkillsInput)
    create!: MyRootsCreateWithoutProfilesOnSkillsInput;
}
