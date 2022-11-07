import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MyRootsCreateWithoutProfilesOnSkillsInput } from './my-roots-create-without-profiles-on-skills.input';
import { Type } from 'class-transformer';
import { MyRootsCreateOrConnectWithoutProfilesOnSkillsInput } from './my-roots-create-or-connect-without-profiles-on-skills.input';
import { MyRootsUpsertWithoutProfilesOnSkillsInput } from './my-roots-upsert-without-profiles-on-skills.input';
import { MyRootsWhereUniqueInput } from './my-roots-where-unique.input';
import { MyRootsUpdateWithoutProfilesOnSkillsInput } from './my-roots-update-without-profiles-on-skills.input';

@InputType()
export class MyRootsUpdateOneWithoutProfilesOnSkillsNestedInput {

    @Field(() => MyRootsCreateWithoutProfilesOnSkillsInput, {nullable:true})
    @Type(() => MyRootsCreateWithoutProfilesOnSkillsInput)
    create?: MyRootsCreateWithoutProfilesOnSkillsInput;

    @Field(() => MyRootsCreateOrConnectWithoutProfilesOnSkillsInput, {nullable:true})
    @Type(() => MyRootsCreateOrConnectWithoutProfilesOnSkillsInput)
    connectOrCreate?: MyRootsCreateOrConnectWithoutProfilesOnSkillsInput;

    @Field(() => MyRootsUpsertWithoutProfilesOnSkillsInput, {nullable:true})
    @Type(() => MyRootsUpsertWithoutProfilesOnSkillsInput)
    upsert?: MyRootsUpsertWithoutProfilesOnSkillsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MyRootsWhereUniqueInput, {nullable:true})
    @Type(() => MyRootsWhereUniqueInput)
    connect?: MyRootsWhereUniqueInput;

    @Field(() => MyRootsUpdateWithoutProfilesOnSkillsInput, {nullable:true})
    @Type(() => MyRootsUpdateWithoutProfilesOnSkillsInput)
    update?: MyRootsUpdateWithoutProfilesOnSkillsInput;
}
